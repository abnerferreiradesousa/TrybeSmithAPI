import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create({ username, classe, password, level }: User): Promise<boolean> {
    await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, password, level) VALUES (?, ?, ?, ?)',
      [username, classe, password, level],
    );
    return true;
  }

  // public async getUserByName(name: string) {
  //   const result = await this.connection.execute(
  //     'SELECT * FROM Trybesmith.Users WHERE username = ?',
  //     [name],
  //   );
  //   console.log(result);
    
  //   const [user] = result;
  //   return user;
  // }

  // public async login(userData: User) {
  //   const user = this.getUserByName(userData.username);
  //   return user;
  // }
}