import { Module } from '@nestjs/common';
import { FactelecService } from './factelec.service';
import { FactelecController } from './factelec.controller';

@Module({
  controllers: [FactelecController],
  providers: [FactelecService]
})
export class FactelecModule {}
