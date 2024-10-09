import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bike } from './entities/bike.entity';
import { CreateBikeDto } from './dto/create-bike.dto';

@Injectable()
export class BikeService {
  constructor(
    @InjectRepository(Bike)
    private bikeRepository: Repository<Bike>,
  ) {}

  findAll(): Promise<Bike[]> {
    return this.bikeRepository.find();
  }

  async findOne(id: string): Promise<Bike> {
    const bike = await this.bikeRepository.findOneBy({ id });
    if (!bike) {
      throw new NotFoundException(`Bike with ID ${id} not found`);
    }
    return bike;
  }

  create(createBikeDto: CreateBikeDto): Promise<Bike> {
    const bike = this.bikeRepository.create(createBikeDto);
    return this.bikeRepository.save(bike);
  }

  async update(id: string, createBikeDto: CreateBikeDto): Promise<Bike> {
    await this.findOne(id); // Check if bike exists
    await this.bikeRepository.update(id, createBikeDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const bike = await this.findOne(id);
    await this.bikeRepository.remove(bike);
  }
}
