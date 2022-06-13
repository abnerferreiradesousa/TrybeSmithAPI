import express, { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductsController from './controllers/products.controller';
import UsersController from './controllers/users.controller';
import OrdersController from './controllers/orders.controller';
import validationProduct from './middlewares/products.middleware';
import ErrorHandler from './interfaces/error.interface';
import validationLogin from './middlewares/login.middleware';
import verifyError from './middlewares/users.middleware';
import authToken from './middlewares/auth.token.middleware';
import validProductsIds from './middlewares/products.ids.middleware';

const app = express();

app.use(express.json());

const productsController = new ProductsController();
const usersController = new UsersController();
const ordersController = new OrdersController();

app.get('/products', productsController.getAll);

app.post(
  '/products', 
  validationProduct,
  productsController.create,
);

app.post(
  '/users',
  verifyError,
  usersController.create,
);

app.get(
  '/orders',
  ordersController.getAll,
);

app.post(
  '/login',
  validationLogin,
  usersController.login,
);

app.post(
  '/orders',
  authToken,
  validProductsIds,
  ordersController.create,
);

app.use((err: ErrorHandler, _req: Request, res: Response, _next: NextFunction) => {
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
});

export default app;
