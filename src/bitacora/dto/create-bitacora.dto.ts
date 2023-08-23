import { IsDateString, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateBitacoraDto {

  @IsOptional()
  @IsNumber()
  BITAID: number;

  @IsNotEmpty()
  @IsNumber()
  BITAUSUA: number;

  @IsNotEmpty()
  @IsNumber()
  BITAEMPR: number;

  @IsNotEmpty()
  @IsDateString()
  BITAFEIN: Date;

  @IsOptional()
  @IsDateString()
  BITAFEOUT: Date;

  @IsNotEmpty()
  @IsIn(['A', 'B'])
  BITAESTADO: string;

  @IsNotEmpty()
  @IsString()
  BITAUSCR: string;

  @IsNotEmpty()
  @IsDateString()
  BITAFECR: Date;

  @IsOptional()
  @IsDateString()
  BITAUSACT: Date;

  @IsOptional()
  @IsDateString()
  BITAFEAC: Date;

  @IsOptional()
  @IsString()
  BITASESION: string;

  @IsOptional()
  @IsNumber()
  BITAHLLO: number;

  @IsNotEmpty()
  @IsNumber()
  BITASEDE: number;

  @IsNotEmpty()
  @IsString()
  BITAIP: string;

  @IsOptional()
  @IsString()
  BITANAVID: string;

  @IsNotEmpty()
  @IsIn([0, 1])
  BITATOC: number;

  @IsOptional()
  @IsIn([0, 1])
  BITADIRECTUSUA: number;
}

