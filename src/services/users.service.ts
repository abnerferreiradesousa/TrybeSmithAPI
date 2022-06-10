// import { StatusCodes } from 'http-status-codes';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';
import generateToken from '../utils/generateToken';
// import errorMessage from '../utils/errorMessage';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(newUser: User): Promise<string> {
    await this.model.create(newUser);
    const token = generateToken(newUser);
    return token;
  }

  // public async login(user): Promise<string> {
  //   const userData = await this.model.login(user);
  //   const { id, password } = userData;
  //   if (user.password !== password) {
  //     throw errorMessage(StatusCodes.UNAUTHORIZED, 'Username or password invalid');
  //   }
  //   const token = generateToken({ ...user, id });
  //   return token;
  // }
}

export default UserService;