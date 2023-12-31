import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product, ProductImage } from './entities';
import { MarcasModule } from 'src/marcas/marcas.module';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    TypeOrmModule.forFeature([Product, ProductImage])
  ]
})
export class ProductsModule {}
