import {
  IsDateString,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateSoftwareDto {
  //CONSECUTIVO DEL REGISTRO
  @IsOptional()
  @IsNumber()
  SOFTID?: number;

  //NOMBRE DEL REGISTRO
  @IsNotEmpty()
  @IsString()
  SOFTNOMB: string;

  //ABREVIACIÓN DEL REGISTRO
  @IsNotEmpty()
  @IsString()
  SOFTABRV: string;

  //ESTADO DEL REGISTRO (A: ACTIVO, I: INACTIVO)
  @IsNotEmpty()
  @IsIn(['A', 'I'])
  SOFTESTADO: string;

  //USUARIO DE CREACIÓN DEL REGISTRO
  @IsNotEmpty()
  @IsString()
  SOFTUSCR: string;

  //FECHA Y HORA DE CREACIÓN DEL REGISTRO
  @IsNotEmpty()
  @IsDateString()
  SOFTFECR: Date;

  //USUARIO DE ACTUALIZACIÓN DEL REGISTRO (ÚLTIMO)
  @IsOptional()
  @IsString()
  SOFTUSAC?: string;

  //FECHA Y HORA DE ACTUALIZACIÓN DEL REGISTRO (ÚLTIMA)
  @IsNotEmpty()
  @IsDateString()
  SOFTFEAC?: Date;
}
