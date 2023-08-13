import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as morgan from 'morgan';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  console.log('PORT:', configService.get('PORT'));
  
  app.use(morgan('dev'));

  //colocarmos el prefijo api a nuestra url
  app.setGlobalPrefix('api');

  //Configuración pipes globales
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );
    
  //await app.listen(3000);
  await app.listen(configService.get('PORT'));
}
bootstrap();
