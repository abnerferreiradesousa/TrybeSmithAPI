import { Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import errorMessage from '../utils/errorMessage';
// import { INVALID_TOKEN, TOKEN_NOT_FOUND } from '../utils/textErrorsMessagers';
import MyRequest from '../interfaces/request.interface';

const isValidType = (value: string | number, type: string) => {
  if (typeof value !== type) {
    throw errorMessage(StatusCodes.UNPROCESSABLE_ENTITY, '"productsIds" must include only numbers');
  }
};

const validProductsIds = (req: MyRequest, _res: Response, next: NextFunction) => {
  const { productsIds } = req.body;
  if (productsIds === undefined) {
    throw errorMessage(StatusCodes.BAD_REQUEST, '"productsIds" is required');
  }
  if (!Array.isArray(productsIds)) {
    throw errorMessage(StatusCodes.UNPROCESSABLE_ENTITY, '"productsIds" must be an array');
  }
  if (productsIds.length === 0) {
    throw errorMessage(StatusCodes.UNPROCESSABLE_ENTITY, '"productsIds" must include only numbers');
  }
  productsIds.forEach((productId) => isValidType(productId, 'number'));
  next();
};

export default validProductsIds;
