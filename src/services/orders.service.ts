import connection from '../models/connection';
import OrderModel from '../models/order.model';
import ProductModel from '../models/product.model';
import Order from '../interfaces/order.interface';
// import { Payload } from '../interfaces/jwt.payload';

class OrderService {
  public model: OrderModel;

  public productModel: ProductModel;

  constructor() {
    this.model = new OrderModel(connection);
    this.productModel = new ProductModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.model.getAll();
    return orders;
  }

  public async create(
    id: number,
    productsIds: number[],
  ): Promise<{ userId: number, productsIds: number[] }> {
    const insertId = await this.model.create(id);
    
    productsIds.map((productId) => this.productModel.update(insertId, productId));
    return {
      userId: id,
      productsIds,
    };
  }
}

export default OrderService;