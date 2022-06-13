import { JwtPayload } from 'jsonwebtoken';

interface Payload {
  username: string,
  id: number 
}

interface PersonalJwtPayload extends Payload, JwtPayload {
  data: Payload,
}

export {
  Payload,
  PersonalJwtPayload,
};
