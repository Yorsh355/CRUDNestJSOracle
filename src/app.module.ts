import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsModule } from './products/products.module';
import { Product, ProductImage } from './products/entities';
import { CommonModule } from './common/common.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "oracle",
      host: process.env.DB_HOSTS,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      serviceName: process.env.DB_NAME,
      synchronize: true,
      autoLoadEntities: true,//carga automatica de las entities
      entities: [Product, ProductImage],
    }),
    ProductsModule,
    CommonModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
