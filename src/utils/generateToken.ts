import jwt from 'jsonwebtoken';

const generateToken = (payload: { username: string, id: number }) => {
  const token = jwt.sign(
    { data: payload }, 
    'hulkEsmaga', 
    { algorithm: 'HS256' },
  );
  return token;
};

export default generateToken;