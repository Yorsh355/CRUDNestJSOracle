import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CotizanteService } from './cotizante.service';
import { CreateCotizanteDto } from './dto/create-cotizante.dto';
import { UpdateCotizanteDto } from './dto/update-cotizante.dto';

@Controller('cotizante')
export class CotizanteController {
  constructor(private readonly cotizanteService: CotizanteService) {}

  @Post()
  create(@Body() createCotizanteDto: CreateCotizanteDto) {
    return this.cotizanteService.create(createCotizanteDto);
  }

  @Get()
  findAll() {
    return this.cotizanteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cotizanteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCotizanteDto: UpdateCotizanteDto) {
    return this.cotizanteService.update(+id, updateCotizanteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cotizanteService.remove(+id);
  }
}
