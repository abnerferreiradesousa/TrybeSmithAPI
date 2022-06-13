import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import User from '../interfaces/user.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create({ username, classe, password, level }: User): Promise<number> {
    const result = await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, password, level) VALUES (?, ?, ?, ?)',
      [username, classe, password, level],
    );
    const [rows] = result;
    const { insertId } = rows;
    return insertId;
  }

  public async getUserByName(name: string) {
    const result = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Users WHERE username = ?',
      [name],
    );
    const [user] = result;
    return user;
  }
}