import express from 'express';
import ProductsController from './controllers/products.controller';

const app = express();

app.use(express.json());

const productsController = new ProductsController();

app.get('/products', productsController.getAll);

export default app;
