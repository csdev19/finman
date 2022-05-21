import CryptoService from './crypto.service';
import TransactionService from './transactions.service';

export const transactionService = new TransactionService();
export const cryptoService = new CryptoService();
