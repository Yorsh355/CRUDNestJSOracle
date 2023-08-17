import { Module } from '@nestjs/common';
import { TpidentService } from './tpident.service';
import { TpidentController } from './tpident.controller';
import { Tpident } from './entities/tpident.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [TpidentController],
  providers: [TpidentService],
  imports: [
    TypeOrmModule.forFeature([Tpident])
  ]
})
export class TpidentModule {}
