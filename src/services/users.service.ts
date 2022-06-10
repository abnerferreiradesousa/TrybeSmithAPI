import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';
import generateToken from '../utils/generateToken';

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
}

export default UserService;