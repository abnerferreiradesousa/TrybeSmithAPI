import { StatusCodes } from 'http-status-codes';
// import { OkPacket, RowDataPacket } from 'mysql2/promise';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';
import generateToken from '../utils/generateToken';
import errorMessage from '../utils/errorMessage';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(newUser: User): Promise<string> {
    const id = await this.model.create(newUser);
    const { username } = newUser;
    
    const token = generateToken({ username, id: Number(id) });
    return token;
  }

  public async login(user: { username: string, password: string }): Promise<string> {
    const userData = await this.model.getUserByName(user.username);
    console.log(userData);
    
    if (userData.length === 0) {
      throw errorMessage(StatusCodes.UNAUTHORIZED, 'Username or password invalid');
    }

    const { id, password } = userData[0];
    
    if (user.password !== password) {
      throw errorMessage(StatusCodes.UNAUTHORIZED, 'Username or password invalid');
    }

    const token = generateToken({ ...user, id: Number(id) });
    return token;
  }
}

export default UserService;