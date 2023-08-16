import { Module } from '@nestjs/common';
import { MarcasService } from './marcas.service';
import { MarcasController } from './marcas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AF_MARCAS_AUD } from './entities/AF_MARCAS_AUD.entity';

@Module({
  controllers: [MarcasController],
  providers: [MarcasService],
  imports: [
    TypeOrmModule.forFeature([AF_MARCAS_AUD])
  ]
})
export class MarcasModule {}
