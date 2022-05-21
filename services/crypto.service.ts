import { ICrypto } from 'interfaces/crypto.interfaces';
import HttpService from './http.service';

class CryptoService extends HttpService {
  constructor() {
    super('http://localhost:8000', '/cryptos');
  }

  getCryptos = async (): Promise<ICrypto[]> => {
    const response = await this.instance.get('');
    return response.data;
  };
}

export default CryptoService;
