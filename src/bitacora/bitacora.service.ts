import { Injectable } from '@nestjs/common';
import { CreateBitacoraDto } from './dto/create-bitacora.dto';
import { UpdateBitacoraDto } from './dto/update-bitacora.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bitacora } from './entities/bitacora.entity';

@Injectable()
export class BitacoraService {

  constructor(
    @InjectRepository(Bitacora)
    private readonly bitacoraRepo: Repository<Bitacora>
  ){}

  create(createBitacoraDto: CreateBitacoraDto) {
    return 'This action adds a new bitacora';
  }

  async findAll() {
    return this.bitacoraRepo.find({
      take: 10,
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} bitacora`;
  }

  update(id: number, updateBitacoraDto: UpdateBitacoraDto) {
    return `This action updates a #${id} bitacora`;
  }

  remove(id: number) {
    return `This action removes a #${id} bitacora`;
  }
}
