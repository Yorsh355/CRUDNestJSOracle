import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMarcaDto {

  @IsNotEmpty()
  @IsNumber()
  MARCEMPR: number;

  @IsNotEmpty()
  @IsString()
  MARCNOMB: string;

  @IsNotEmpty()
  @IsString()
  MARCABRV: string;

  @IsNotEmpty()
  @IsString()
  MARCESTADO: string;

  @IsNotEmpty()
  @IsString()
  MARCUSCR: string;

  @IsNotEmpty()
  @IsDateString()
  MARCFECR: Date;

  @IsString()
  @IsOptional()
  MARCUSACT?: string;

  @IsDateString()
  @IsOptional()
  MARCFEAC?: Date;

  @IsString()
  @IsOptional()
  AUDIT_ACTION?: string;

  @IsString()
  @IsOptional()
  AUDIT_BY: string;

  @IsDate()
  @IsOptional()
  AUDIT_AT?: Date;

}

