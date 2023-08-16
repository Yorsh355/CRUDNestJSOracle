import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AF_MARCAS_AUD } from './entities/AF_MARCAS_AUD.entity';

@Injectable()
export class MarcasService {
  constructor(
    @InjectRepository(AF_MARCAS_AUD)
    private readonly marcaRepository:Repository<AF_MARCAS_AUD>,
  ){}

  async create(createMarcaDto: CreateMarcaDto) {
   try {
     const brand = this.marcaRepository.create(createMarcaDto);
     await this.marcaRepository.save(brand);
     return brand;
   } catch (error) {
    console.log(error);
    throw new InternalServerErrorException('Algo salio mal')
   }
  }

  findAll() {
    return this.marcaRepository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} marca`;
  }

  update(id: number, updateMarcaDto: UpdateMarcaDto) {
    return `This action updates a #${id} marca`;
  }

  remove(id: number) {
    return `This action removes a #${id} marca`;
  }
}
