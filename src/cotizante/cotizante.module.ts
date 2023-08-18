import { Module } from '@nestjs/common';
import { CotizanteService } from './cotizante.service';
import { CotizanteController } from './cotizante.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cotizante } from './entities/cotizante.entity';
import { Tpident } from '../tpident/entities/tpident.entity';
import { TpidentModule } from 'src/tpident/tpident.module';

@Module({
  controllers: [CotizanteController],
  providers: [CotizanteService],
  imports: [
    TypeOrmModule.forFeature([Cotizante, Tpident]), 
    //TpidentModule
  ],
  //exports: [CotizanteService]
})
export class CotizanteModule {}
