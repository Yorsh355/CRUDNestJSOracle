import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FactelecService } from './factelec.service';
import { CreateFactelecDto } from './dto/create-factelec.dto';
import { UpdateFactelecDto } from './dto/update-factelec.dto';

@Controller('factelec')
export class FactelecController {
  constructor(private readonly factelecService: FactelecService) {}

  @Post()
  create(@Body() createFactelecDto: CreateFactelecDto) {
    return this.factelecService.create(createFactelecDto);
  }

  @Get()
  findAll() {
    return this.factelecService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.factelecService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFactelecDto: UpdateFactelecDto) {
    return this.factelecService.update(+id, updateFactelecDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.factelecService.remove(+id);
  }
}
