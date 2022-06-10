import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UsersService from '../services/users.service';

class UsersController {
  constructor(private usersService = new UsersService()) { }

  public create = async (req: Request, res: Response) => {
    const token = await this.usersService.create(req.body);
    res.status(StatusCodes.CREATED).json({ token });
  };

  // public login = async (req: Request, res: Response) => {
  //   const token = await this.usersService.login(req.body);
  //   res.status(StatusCodes.CREATED).json({ token });
  // };
}

export default UsersController;