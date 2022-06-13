import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrdersService from '../services/orders.service';
import MyRequest from '../interfaces/request.interface';
import User from '../types/user.type';

class OrdersController {
  constructor(private orderService = new OrdersService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAll();
    res.status(StatusCodes.OK).json(orders);
  };

  public create = async (req: MyRequest, res: Response) => {
    const { id } = req.user as User;
    const { productsIds } = req.body;
    const orders = await this.orderService.create(id, productsIds);
    res.status(StatusCodes.CREATED).json(orders);
  };
}

export default OrdersController;