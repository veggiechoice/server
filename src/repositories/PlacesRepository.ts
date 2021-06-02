import Places from '../schemas/Places';

interface IPlaces {
  productIds: Array<string>;
  name: string;
  description: string;
  address: string;
  location: {
    type: 'POINT';
    coordinates: [Number];
  };
}

interface PlacesQueryParams {
  latitude: number | null;
  longitude: number | null;
  _search: string;
}

/**
 * @author: Julia Leite de Souza.
 * @description - Classe de repositorio de Places.
 */
class PlacesRepository {
  public async findAll({ _search, longitude, latitude }: PlacesQueryParams) {
    let filters;
    if (latitude && longitude) {
      filters = {
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [latitude, longitude],
            },
            $maxDistance: 5000,
          },
        },
      };
    }
    const places = await Places.find(filters as any);
    return places;
  }

  public async create(data: IPlaces) {
    const place = await Places.create(data);

    return place;
  }
}

export { PlacesRepository };
