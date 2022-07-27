import { ClientError, getBodyProps } from '../utils/utils.js';
import { v4 as uuidv4 } from 'uuid';
import { query, sql } from '../models/model.js';

const itemController = {};

itemController.addNewItem = (req, res, next) => {
  // checks to make sure all required req.body props are there
  const required = {
    userId: 'string',
    name: 'string',
    cost: 'string',
    location: 'string',
    category: 'string',
  };
  let properties;
  try {
    properties = getBodyProps(req, required);
  } catch (err) {
    return next({
      msg: 'Invalid properties provided in request body trying to add new user',
      err: err,
      code: 400,
    });
  }

  // adds row to item table with new item for rent
  const text = `
    INSERT INTO items (_id, user_id, name, cost, location)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `;
  query(text, [
    uuidv4(),
    req.body.userId,
    req.body.name,
    req.body.cost,
    req.body.location,
  ]).then((data) => {
    res.locals.newItem = data.rows;
    return next();
  });
};

itemController.rentItem = (req, res, next) => {
  // checks to make sure all required req.body props are there
  const required = {
    itemId: 'string',
    ownerId: 'string',
    renterId: 'string',
    dateStart: 'string',
    dateEnd: 'string',
  };
  let properties;
  try {
    properties = getBodyProps(req, required);
  } catch (err) {
    return next({
      msg: 'Invalid properties provided in request body trying to add new rental',
      err: err,
      code: 400,
    });
  }

  // adds row to item table with new item for rent
  const text = `
    INSERT INTO Rentals (item_id, owner_id, renter_id, date_start, date_end)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `;
  query(text, [
    req.body.itemId,
    req.body.ownerId,
    req.body.renterId,
    req.body.dateStart,
    req.body.dateEnd,
  ]).then((data) => {
    res.locals.newRental = data.rows;
    return next();
  });
};

itemController.getItems = (req, res, next) => {
  // const required = {
  //   location: 'string',
  // };
  // let properties;
  // try {
  //   properties = getBodyProps(req, required);
  // } catch (err) {
  //   return next({
  //     msg: 'Invalid properties provided in request body trying to get current items',
  //     err: err,
  //     code: 400,
  //   });
  // }

  const params = [req.params.location];
  console.log(req.params.location);
  let text = `
    SELECT * FROM Items
    WHERE Items.location = $1
    `;
  if (req.body.category) {
    text += 'AND Items.category = $2';
    params.push(req.params.category);
  }

  query(text, params).then((data) => {
    res.locals.items = data.rows;
    console.log(res.locals.items);
    return next();
  });
};

export default itemController;
