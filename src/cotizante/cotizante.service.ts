import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCotizanteDto } from './dto/create-cotizante.dto';
import { UpdateCotizanteDto } from './dto/update-cotizante.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cotizante } from './entities/cotizante.entity';
import { Repository } from 'typeorm';
import { Tpident } from 'src/tpident/entities/tpident.entity';

@Injectable()
export class CotizanteService {
  
  constructor(
    @InjectRepository(Cotizante)
    private readonly cotizanteRepository:Repository<Cotizante>,

    @InjectRepository(Tpident)
    private readonly tpidentRepository:Repository<Tpident>,
  ){}

async create(createCotizanteDto: CreateCotizanteDto) {
  try {
    const nextCotizanteId = await this.getNextCotizanteId();
    const cotizante = this.cotizanteRepository.create(createCotizanteDto);
    cotizante.COTIID = nextCotizanteId;

    const savedCotizante = await this.cotizanteRepository.save(cotizante);

    const createdCotizante = await this.cotizanteRepository.findOne({
      where: { COTIID: savedCotizante.COTIID },
      relations: ['tpident'],
    });

    if (!createdCotizante) {
      throw new Error('Failed to create cotizante');
    }

    return createdCotizante;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while creating cotizante');
  }
}

async getNextCotizanteId(): Promise<number> {
  const queryResult = await this.cotizanteRepository.query(
    `SELECT MAX(COTIID) as maxId FROM PA_COTIZANTE`
  );
  
  const maxId = queryResult[0].MAXID as number;
  const addmaxId = maxId ? maxId + 1 : 1;
  return addmaxId;
}


  async findAll() {
      return this.cotizanteRepository.find({
        relations: ['tpident'],
        take: 40,
      }); 
  }

  async findOne(id: number) {
    const cotizante = await this.cotizanteRepository.findOne({
      where:[
      {COTIID: id},
    ],
    relations: ['tpident'],
    });
    if(!cotizante)
      throw new NotFoundException(`Cotizante with ID ${id} not found`)
    return cotizante;
  }

  async update(id: number, updateCotizanteDto: UpdateCotizanteDto){ 
    let cotizante = await this.cotizanteRepository.preload({
      COTIID: id,
      ...updateCotizanteDto,
    });

    if(!cotizante)
      throw new NotFoundException(`Cotizantre whit id ${id} not found`);

      const updateCotizante = this.cotizanteRepository.save(cotizante);
      return updateCotizante;
  }

  async remove(id: number) {
    const cotizante = await this.findOne(id);
    await this.cotizanteRepository.delete(cotizante);
    return cotizante;
  }
}
