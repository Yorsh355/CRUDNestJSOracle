import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTpidentDto } from './dto/create-tpident.dto';
import { UpdateTpidentDto } from './dto/update-tpident.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tpident } from './entities/tpident.entity';
import { Repository } from 'typeorm';


@Injectable()
export class TpidentService {

  constructor(
    @InjectRepository(Tpident)
    private readonly tpidentRepository: Repository<Tpident>,

    /* @InjectRepository(Cotizante)
    private readonly cotizanteRepository: Repository<Cotizante>, */
  ){}

  
  async create(createTpidentDto: CreateTpidentDto) {
    try {
      const lastRecord = await this.tpidentRepository.createQueryBuilder()
        .orderBy("TPIDID", "DESC") 
        .getOne();
      
      if (lastRecord) {
        console.log(lastRecord);
        const lasRecordId = lastRecord.TPIDID + 1;
        
        const ident = this.tpidentRepository.create(createTpidentDto);
        ident.TPIDID = lasRecordId;
        
        await this.tpidentRepository.save(ident);
        return ident;
      } else {
        //Si no hay registros en la DB
        console.log("No records found.");
        
        return null;
      }
    } catch (error) {
      console.log(error);
      throw error; 
    }
  }
  

  async findAll() {
    return this.tpidentRepository.find({});
  }

 /*  async findOne(id: number) {
      const ident = await this.tpidentRepository.findOneBy({TPIDID: id});
    if(!ident)
      throw new NotFoundException(`Ident whit id ${id} not found`);
    return ident;
  } */
  //Lo solucione cambiando la relación ya que es de Tpident:OneToMany y Cotizante: ManyToOne
  async findOne(id: number): Promise<Tpident> {
    const tpident = await this.tpidentRepository
      .createQueryBuilder('tpident')
      .leftJoinAndSelect('tpident.cotizantes', 'cotizante')
      .where('tpident.TPIDID = :id', { id } )
      .getOne();

      return tpident;
  }

  async update(id: number, updateTpidentDto: UpdateTpidentDto) {
    const ident = await this.tpidentRepository.preload({
      TPIDID: id,
      ...updateTpidentDto 
    })
    if(!ident) throw new NotFoundException(`Product with id: ${id} not found`);
    
    await this.tpidentRepository.save(ident);

    return ident;
  }

  async remove(id: number) {
    const ident = await this.findOne(id);
    await this.tpidentRepository.remove(ident);
    return ident;
  }
}
