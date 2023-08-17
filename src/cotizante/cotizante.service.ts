import { Injectable } from '@nestjs/common';
import { CreateCotizanteDto } from './dto/create-cotizante.dto';
import { UpdateCotizanteDto } from './dto/update-cotizante.dto';

@Injectable()
export class CotizanteService {
  create(createCotizanteDto: CreateCotizanteDto) {
    return 'This action adds a new cotizante';
  }

  findAll() {
    return `This action returns all cotizante`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cotizante`;
  }

  update(id: number, updateCotizanteDto: UpdateCotizanteDto) {
    return `This action updates a #${id} cotizante`;
  }

  remove(id: number) {
    return `This action removes a #${id} cotizante`;
  }
}
