import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateTpidentDto {

  @IsOptional()
  TPIDID: number;

  @IsNotEmpty()
  @IsString()
  TPIDNOMB: string;

  @IsNotEmpty()
  @IsString()
  TPIDABRV: string;

  @IsOptional()
  @IsString()
  TPIDESTADO: string;

  @IsNotEmpty()
  @IsString()
  TPIDUSCR: string;

  //Consultar que otra forma se puede utilñizar para validar la fecha.
  @IsNotEmpty()
  @IsDateString()
  TPIDFECR: Date;

  @IsOptional()
  @IsString()
  TPIDUSACT: string;

  @IsOptional()
  @IsDateString()
  TPIDFEAC: Date;  

  @IsOptional()
  @IsString()
  TPIDFAEL: string;

  @IsOptional()
  @IsString()
  TPIDFAELTOC: string;

}
