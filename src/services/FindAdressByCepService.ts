import AppError from '../errors/AppError';
import { CepProvider } from '../providers/CepProvider';

class FindAdressByCepService {
  private cepProvider;

  constructor() {
    this.cepProvider = new CepProvider();
  }

  public async execute(cep: string) {
    const address = await this.cepProvider.findAddressByCep(cep);

    if (!address) {
      throw new AppError('No Adress was found with this CEP', 'error', 404);
    }

    return address;
  }
}

export { FindAdressByCepService };
