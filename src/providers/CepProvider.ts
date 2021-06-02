import cep from 'cep-promise';

interface ICepPromiseAddress {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  service: string;
}
class CepProvider {
  public async findAddressByCep(cepNumber: string) {
    const address: ICepPromiseAddress = await cep(cepNumber);

    return address || null;
  }
}

export { CepProvider };
