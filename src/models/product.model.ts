import { Pool } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    const result = await this.connection
      .execute('SELECT * FROM Trybesmith.Products');
    const [rows] = result;
    return rows as Product[];
  }

  public async create(name: string, amount: string): Promise<Product> {
    const result = await this.connection
      .execute(
        'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
        [name, amount],
      );
    console.log(result);
      
    return {
      id: 1,
      name,
      amount,
    };
  }
}