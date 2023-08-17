import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
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
    const lastRecord = await this.marcaRepository.createQueryBuilder()
    .orderBy("AF_MARCAS_AUD.MARCID", "DESC" )
    .getOne()
    const lasRecordId = lastRecord.MARCID + 1;
    const brand = this.marcaRepository.create(createMarcaDto);
    brand.MARCID = lasRecordId;
    console.log( lasRecordId);
     await this.marcaRepository.save(brand);
     return brand;
   } catch (error) {
    console.log(error);
    throw new InternalServerErrorException(error)
   }
  }

  findAll() {
    return this.marcaRepository.find({});
  }

  async findOne(id: number) {
    const brand = await this.marcaRepository.findOneBy({MARCID: +id});
    if(!brand)
      throw new NotFoundException(`Marca whit id ${id} not found`);
    return brand;
  }

  async update(id: number, updateMarcaDto: UpdateMarcaDto) {
    //Buscamos un producto por id y cargamos las propiedades del updateMarcaDto 
    const brand = await this.marcaRepository.preload({
      MARCID: +id,
      ...updateMarcaDto 
    })
    if(!brand) throw new NotFoundException(`Product with id: ${id} not found`);
    
    await this.marcaRepository.save(brand);

    return brand;

  }

  async remove(id: number) {
    const brand = await this.findOne(+id)
    await this.marcaRepository.remove(brand);
    return brand;
  }
}
