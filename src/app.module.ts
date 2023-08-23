import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsModule } from './products/products.module';
import { CommonModule } from './common/common.module';
import { FactelecModule } from './factelec/factelec.module';
import { DataSourceConfig } from './config/data.source';
//import { Product, ProductImage } from './products/entities';
//import { Ad_factelec } from './factelec/entities/AD_FACTELEC.entity';
//import { Origenes_tabla } from './factelec/entities/ORIGENES_TABLA.entity';
import { MarcasModule } from './marcas/marcas.module';
import { TpidentModule } from './tpident/tpident.module';
import { CotizanteModule } from './cotizante/cotizante.module';
import { BitacoraModule } from './bitacora/bitacora.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      //envFilePath: `.${process.env.NODE_ENV.trim()}.env`,
      envFilePath: 'develop.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({...DataSourceConfig}),
    ProductsModule,
    CommonModule,
    FactelecModule,
    MarcasModule,
    TpidentModule,
    CotizanteModule,
    BitacoraModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
