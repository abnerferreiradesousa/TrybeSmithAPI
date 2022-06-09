import express, { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductsController from './controllers/products.controller';
import validationProduct from './middlewares/products.middleware';
import ErrorHandler from './interfaces/error.interface';

const app = express();

app.use(express.json());

const productsController = new ProductsController();

app.get('/products', productsController.getAll);
app.post(
  '/products', 
  validationProduct,
  productsController.create,
);

app.use((err: ErrorHandler, _req: Request, res: Response, _next: NextFunction) => {
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
});

export default app;
