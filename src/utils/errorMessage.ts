import ErrorHandler from '../interfaces/error.interface';

export default (status: number, message: string): ErrorHandler => ({
  name: 'Erro',
  status, 
  message, 
});