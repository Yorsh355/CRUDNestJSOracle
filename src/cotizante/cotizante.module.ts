import { Module } from '@nestjs/common';
import { CotizanteService } from './cotizante.service';
import { CotizanteController } from './cotizante.controller';

@Module({
  controllers: [CotizanteController],
  providers: [CotizanteService]
})
export class CotizanteModule {}
