import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import errorMessage from '../utils/errorMessage';
import User from '../interfaces/user.interface';

const validUsername = (username: string) => {
  if (!username) {
    throw errorMessage(StatusCodes.BAD_REQUEST, '"username" is required');
  }
  if (typeof username !== 'string') {
    throw errorMessage(StatusCodes.UNPROCESSABLE_ENTITY, '"username" must be a string');
  }
  if (username.length <= 2) {
    throw errorMessage(
      StatusCodes.UNPROCESSABLE_ENTITY, 
      '"username" length must be at least 3 characters long',
    );
  }
};

const validClasse = (classe: string) => {
  if (!classe) {
    throw errorMessage(StatusCodes.BAD_REQUEST, '"classe" is required');
  }
  if (typeof classe !== 'string') {
    throw errorMessage(StatusCodes.UNPROCESSABLE_ENTITY, '"classe" must be a string');
  }
  if (classe.length <= 2) {
    throw errorMessage(
      StatusCodes.UNPROCESSABLE_ENTITY, 
      '"classe" length must be at least 3 characters long',
    );
  }
};

const validLevel = (level: number) => {
  if (level === undefined) {
    throw errorMessage(StatusCodes.BAD_REQUEST, '"level" is required');
  }
  if (typeof level !== 'number') {
    throw errorMessage(StatusCodes.UNPROCESSABLE_ENTITY, '"level" must be a number');
  }
  if (level <= 0) {
    console.log('sjladkfjkdaskjfdçsl', level);
    
    throw errorMessage(
      StatusCodes.UNPROCESSABLE_ENTITY, 
      '"level" must be greater than or equal to 1',
    );
  }
};

const validPassword = (password: string) => {
  if (!password) {
    throw errorMessage(StatusCodes.BAD_REQUEST, '"password" is required');
  }
  if (typeof password !== 'string') {
    throw errorMessage(StatusCodes.UNPROCESSABLE_ENTITY, '"password" must be a string');
  }
  if (password.length <= 8) {
    throw errorMessage(
      StatusCodes.UNPROCESSABLE_ENTITY, 
      '"password" length must be at least 8 characters long',
    );
  }
};

function validationUsers(req: Request, res: Response, next: NextFunction) {
  const user: User = req.body;
  try {
    validUsername(user.username);
    validClasse(user.classe);
    validLevel(user.level);
    validPassword(user.password);
    next();
  } catch (error) {
    next(error);
  }
}

export default validationUsers;