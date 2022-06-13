import { Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt, { JwtPayload } from 'jsonwebtoken';
import errorMessage from '../utils/errorMessage';
import { INVALID_TOKEN, TOKEN_NOT_FOUND } from '../utils/textErrorsMessagers';
import MyRequest from '../interfaces/request.interface';

const authToken = (req: MyRequest, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: TOKEN_NOT_FOUND });
    }
    
    const tokenIsValid = jwt.verify(authorization, 'hulkEsmaga') as JwtPayload;
    const { data } = tokenIsValid;
    req.user = data;
    next();
  } catch (error) {
    next(errorMessage(StatusCodes.UNAUTHORIZED, INVALID_TOKEN));
  }
};

export default authToken;
