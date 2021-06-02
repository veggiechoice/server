import { classToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import AppError from '../errors/AppError';
import { FilesRepository } from '../repositories/FilesRepository';

/**
 * @author: Heloisa Gabriela Vieira.
 * @description: Files Controller.
 */
class FilesController {
  constructor() {}

  public async create(request: Request, response: Response) {
    const { name, size, product } = request.body;
    const filesRepository = new FilesRepository();
    const filesExists = await filesRepository.findByName(name);

    if (filesExists) {
      throw new AppError('This file already exist');
    }

    const files = await filesRepository.create({
      name,
      size,
      product,
    });

    return response.json(files);
  }

  public async index(request: Request, response: Response) {
    const filesRepository = new FilesRepository();
    const files = await filesRepository.findAll();

    return response.json(classToPlain(files));
  }

  public async delete(request: Request, response: Response) {
    const filesRepository = new FilesRepository();
    const { id } = request.params;

    await filesRepository.deleteOne(id);
    return response.send();
  }

  public async update(request: Request, response: Response) {
    const { name, size, product } = request.body;
    const filesRepository = new FilesRepository();
    const files = await filesRepository.findByName(name);

    if (!files) {
      throw new AppError('No file was found!');
    }

    if (name) {
      files.name = name;
    }

    if (size) {
      files.size = size;
    }

    if (product) {
      files.product = product;
    }

    return response.json(filesRepository.save(files));
  }
}

export { FilesController };
