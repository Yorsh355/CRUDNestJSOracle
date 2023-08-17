import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TpidentService } from './tpident.service';
import { CreateTpidentDto } from './dto/create-tpident.dto';
import { UpdateTpidentDto } from './dto/update-tpident.dto';

@Controller('tpident')
export class TpidentController {
  constructor(private readonly tpidentService: TpidentService) {}

  @Post()
  create(@Body() createTpidentDto: CreateTpidentDto) {
    return this.tpidentService.create(createTpidentDto);
  }

  @Get()
  findAll() {
    return this.tpidentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tpidentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTpidentDto: UpdateTpidentDto) {
    return this.tpidentService.update(+id, updateTpidentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tpidentService.remove(+id);
  }
}
