import { Module } from '@nestjs/common';
import { TpidentService } from './tpident.service';
import { TpidentController } from './tpident.controller';
import { Tpident } from './entities/tpident.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CotizanteModule } from 'src/cotizante/cotizante.module';
import { Cotizante } from 'src/cotizante/entities/cotizante.entity';

@Module({
  controllers: [TpidentController],
  providers: [TpidentService],
  imports: [
    TypeOrmModule.forFeature([Tpident, Cotizante]), 
    //CotizanteModule
  ],
  //exports: [TpidentService]
})
export class TpidentModule {}
