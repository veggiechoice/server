import { getRepository, Repository } from 'typeorm';
import { Adress } from '../models/Adress';

// interface IAdress {
//   street: string;
//   city: string;
//   number: string;
//   country: string;
//   zipcode: string;
// }

/**
 * @author: Gabriel de Moura e Souza.
 * @description - Classe de repositorio de Usuários.
 */
class AdressesRepository {
  private ormRepository: Repository<Adress> = getRepository(Adress);

  constructor() {
    this.ormRepository = getRepository(Adress);
  }
}

export { AdressesRepository };
