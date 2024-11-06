import { Photo } from './photo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class PhotoService {

  constructor(
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
  ) { }

  async create(create: Photo): Promise<Photo> {
    return this.photoRepository.save(create);
  }

  async findAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }

  async findOne(id: number): Promise<Photo> {
    const photo = await this.findOne(id);

    if (!photo) {
      throw new NotFoundException(`Photo com o ID ${id} não encontrada`);
    }

    return photo;
  }

  async update(id: number, update: Photo): Promise<Photo>{

    const photo = await this.findOne(id);

    if (!photo) {
      throw new NotFoundException(`Photo com o ID ${id} não encontrada`);
    }

    await this.photoRepository.update(id, update);

    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {

    const photo = await this.findOne(id);

    if (!photo) {
      throw new NotFoundException(`Photo com o ID ${id} não encontrada`);
    }

    await this.photoRepository.delete(id);
  }
}

