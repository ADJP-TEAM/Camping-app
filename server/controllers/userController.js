import { ClientError, getBodyProps } from '../utils/utils.js';
import { v4 as uuidv4 } from 'uuid';
import { query, sql } from '../models/model.js';

const userController = {};

userController.addNewUser = (req, res, next) => {
  const required = {
    // username: 'string',
    email: 'string',
    location: 'string',
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

  const text = `
    INSERT INTO users (_id, username, email, location)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `;
  query(text, [uuidv4(), req.body.email, req.body.location]).then((data) => {
    res.locals.newUser = data.rows;
    return next();
  });
};

// userController.verifyUser = (req, res, next) => {
//   const text = `
//       INSERT INTO users (_id, username, email, location)
//       VALUES ($1, $2, $3, $4)
//       RETURNING *
//       `;
//   query(text, [uuidv4(), req.body.username, req.body.email, req.body.location]);
// };

export default userController;
