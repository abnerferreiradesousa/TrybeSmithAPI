import { Pool, RowDataPacket } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const result = await this.connection
      .execute<RowDataPacket[]>(
      `SELECT PR.id as productsIds, O.id, O.userId FROM Trybesmith.Orders AS O
      JOIN Trybesmith.Products AS PR
      ON O.id = PR.orderId;`,
    );
    const [rows] = result;
    
    const serielize = rows.map((order) => ({
      id: order.id,
      userId: order.userId,
      productsIds: [order.productsIds],
    }));
    return serielize as Order[];
  }
}