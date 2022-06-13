import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import errorMessage from '../utils/errorMessage';

const schema = Joi.object({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

const verifyError = (req: Request, res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);
  if (error) {
    if (error.message.includes('required')) {
      throw errorMessage(StatusCodes.BAD_REQUEST, error.message);
    }
    throw errorMessage(StatusCodes.UNPROCESSABLE_ENTITY, error.message);
  }
  next();
}; 

export default verifyError;
