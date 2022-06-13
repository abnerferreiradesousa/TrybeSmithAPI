import { Request } from 'express';

interface MyRequest extends Request {
  user?: {
    username: string,
    id: number 
  }
}

export default MyRequest;