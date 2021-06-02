import { Request, Response } from 'express';
import AppError from '../errors/AppError';
import { PlacesRepository } from '../repositories/PlacesRepository';

/**
 * @author: Julia Leite de Souza.
 * @description -Places Controller.
 */
class PlacesController {
  constructor() {}

  public async create(request: Request, response: Response) {
    const { productIds, name, description, address, location } = request.body;
    const placesRepository = new PlacesRepository();
    // const placesExists = await placesRepository.findByName(name);

    // if (placesExists) {
    //   return;
    // }

    const places = await placesRepository.create({
      productIds,
      name,
      description,
      address,
      location,
    });

    return response.json(places);
  }

  public async index(request: Request, response: Response) {
    const { _search, _latitude, _longitude } = request.query;
    const placesRepository = new PlacesRepository();
    const places = await placesRepository.findAll({
      _search: _search as string,
      latitude: Number(_latitude) || null,
      longitude: Number(_longitude) || null,
    });

    return response.json(places);
  }

  public async delete(request: Request, response: Response) {
    // const placesRepository = new PlacesRepository();
    // const { id } = request.params;
    // await placesRepository.deleteOne(id);
    // return response.send();
  }

  public async update(request: Request, response: Response) {
    // const { name, description, address } = request.body;
    // const placesRepository = new PlacesRepository();
    // const { id } = request.params;
    // const places = await placesRepository.findByPlaces(id);
    // if (!places) {
    //   throw new AppError('No place was found!');
    // }
    // if (name) {
    //   places.name = name;
    // }
    // if (description) {
    //   places.description = description;
    // }
    // if (address) {
    //   places.address = address;
    // }
    // return response.json(placesRepository.save(places));
  }
}

export { PlacesController };
