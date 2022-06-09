// ./middlewares/books.middleware.ts

import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Product from '../interfaces/product.interface';
import errorMessage from '../utils/errorMessage';

const validName = (name: string) => {
  if (!name) {
    throw errorMessage(StatusCodes.BAD_REQUEST, '"name" is required'); 
  }
  if (typeof name !== 'string') {
    throw errorMessage(StatusCodes.UNPROCESSABLE_ENTITY, '"name" must be a string');
  }
  if (name.length <= 2) {
    throw errorMessage(
      StatusCodes.UNPROCESSABLE_ENTITY, 
      '"name" length must be at least 3 characters long',
    );
  }
};

const validAmount = (amount: string) => {
  if (!amount) {
    throw errorMessage(StatusCodes.BAD_REQUEST, '"amount" is required');
  }
  if (typeof amount !== 'string') {
    throw errorMessage(StatusCodes.UNPROCESSABLE_ENTITY, '"amount" must be a string');
  }
  if (amount.length <= 2) {
    throw errorMessage(
      StatusCodes.UNPROCESSABLE_ENTITY, 
      '"amount" length must be at least 3 characters long',
    );
  }
};

function validationProduct(req: Request, res: Response, next: NextFunction) {
  const product: Product = req.body;
  try {
    validName(product.name);
    validAmount(product.amount);
    next();
  } catch (error) {
    next(error);
  }
}

export default validationProduct;