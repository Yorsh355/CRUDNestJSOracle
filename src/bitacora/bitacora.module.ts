import { Module } from '@nestjs/common';
import { BitacoraService } from './bitacora.service';
import { BitacoraController } from './bitacora.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bitacora } from './entities/bitacora.entity';

@Module({
  controllers: [BitacoraController],
  providers: [BitacoraService],
  imports: [
    TypeOrmModule.forFeature([Bitacora]),
  ]
})
export class BitacoraModule {}
