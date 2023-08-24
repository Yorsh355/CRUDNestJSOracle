import { Injectable } from '@nestjs/common';
import { CreateSoftwareDto } from './dto/create-software.dto';
import { UpdateSoftwareDto } from './dto/update-software.dto';
import { Repository } from 'typeorm';
import { Software } from './entities/software.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SoftwareService {

  constructor(
    @InjectRepository(Software)
    private readonly softwareRepo: Repository<Software>,
  ){}

  create(createSoftwareDto: CreateSoftwareDto) {
    return 'This action adds a new software';
  }

  findAll() {
    return this.softwareRepo.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} software`;
  }

  update(id: number, updateSoftwareDto: UpdateSoftwareDto) {
    return `This action updates a #${id} software`;
  }

  remove(id: number) {
    return `This action removes a #${id} software`;
  }
}
