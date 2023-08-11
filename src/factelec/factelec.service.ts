import { Injectable } from '@nestjs/common';
import { CreateFactelecDto } from './dto/create-factelec.dto';
import { UpdateFactelecDto } from './dto/update-factelec.dto';

@Injectable()
export class FactelecService {
  create(createFactelecDto: CreateFactelecDto) {
    return 'This action adds a new factelec';
  }

  findAll() {
    return `This action returns all factelec`;
  }

  findOne(id: number) {
    return `This action returns a #${id} factelec`;
  }

  update(id: number, updateFactelecDto: UpdateFactelecDto) {
    return `This action updates a #${id} factelec`;
  }

  remove(id: number) {
    return `This action removes a #${id} factelec`;
  }
}
