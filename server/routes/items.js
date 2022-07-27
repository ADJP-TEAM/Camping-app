import { Router } from 'express';
import itemController from '../controllers/itemController.js';
const itemsRouter = Router();

itemsRouter.get('/listing/:id', itemController.getSingleItem, function (req, res) {
  res.status(200).json({ item: res.locals.item });
});

itemsRouter.get('/:location', itemController.getItems, function (req, res) {
  res.status(200).json({ items: res.locals.items });
});

// itemsRouter.get(
//   '/:location/:category',
//   itemController.getItems,
//   function (req, res) {
//     res.status(200).json({ items: res.locals.items });
//   }
// );

itemsRouter.post('/', itemController.addNewItem, function (req, res) {
  res.status(200).json({ newItem: res.locals.newItem });
});

itemsRouter.post('/rent/:itemId', itemController.rentItem, function (req, res) {
  res.status(200).json({ newRental: res.locals.newRental });
});

export default itemsRouter;
