import { IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { PrimaryColumn } from "typeorm";

export class CreateCotizanteDto {

  @PrimaryColumn({
    unique: true,
    name: "TPIDID",
    type: 'number'
  })
  TPIDID: number;

  //TODO: este es el campo de la relación, tener en cuenta como se manejaría.
  @IsNotEmpty()
  @IsString()
  TPIDNOMB: string;

  @IsNotEmpty()
  @IsString()
  TPIDABRV: string;

  @IsNotEmpty()
  @IsString()
  TPIDESTADO: string;

  @IsNotEmpty()
  @IsString()
  TPIDUSCR: string;

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
