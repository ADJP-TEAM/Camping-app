import { Router } from 'express';
import userController from '../controllers/userController.js';
const usersRouter = Router();

usersRouter.post('/', userController.addNewUser, function (req, res) {
  res.status(200).json({ newUser: res.locals.newUser });
});

export default usersRouter;
