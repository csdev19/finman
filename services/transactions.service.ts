import { ITransaction } from 'interfaces/income.interface';
import HttpService from './http.service';

class TransactionService extends HttpService {
  constructor() {
    super('http://localhost:8000', '/transactions');
  }

  getTransactions = async (): Promise<ITransaction[]> => {
    const response = await this.instance.get('');
    return response.data;
  };
}

export default TransactionService;
