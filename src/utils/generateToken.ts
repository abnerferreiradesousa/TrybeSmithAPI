import jwt from 'jsonwebtoken';
// import NewUser from '../interfaces/user.interface';

const generateToken = (payload: { username: string, id: number }) => {
  // const jwtConfig = {
  //   algorithm: 'HS256',
  // }; 
  const token = jwt.sign(
    { data: payload }, 
    'hulkEsmaga', 
    { algorithm: 'HS256' },
  );
  return token;
};

export default generateToken;