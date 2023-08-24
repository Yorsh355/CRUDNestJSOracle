import { Injectable } from '@nestjs/common';
import { CreateSedeDto } from './dto/create-sede.dto';
import { UpdateSedeDto } from './dto/update-sede.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sede } from './entities/sede.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SedeService {

  constructor(
    @InjectRepository(Sede)
    private readonly sedeRepo: Repository<Sede>
  ){}

  create(createSedeDto: CreateSedeDto) {
    return 'This action adds a new sede';
  }

  findAll() {
    return this.sedeRepo.find({
      take: 10,
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} sede`;
  }

  update(id: number, updateSedeDto: UpdateSedeDto) {
    return `This action updates a #${id} sede`;
  }

  remove(id: number) {
    return `This action removes a #${id} sede`;
  }
}
