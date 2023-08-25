import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

ConfigModule.forRoot({
  /* envFilePath: `.${process.env.NODE_ENV.trim()}.env` */ 
  envFilePath:`.env`,
});

const configService = new ConfigService();
console.log('DB_USERNAME:', configService.get('DB_USERNAME'));

export const DataSourceConfig: DataSourceOptions = {
  type: 'oracle',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  serviceName: configService.get('DB_NAME'),
  entities: [__dirname + '/../**/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  synchronize: false,
  migrationsRun: true,
  logging: false,
  namingStrategy: new SnakeNamingStrategy(),
};
//Para poder correr las migraciones instanciamos el datasource
export const AppDS = new DataSource(DataSourceConfig);
