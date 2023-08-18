import { IsDateString, IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCotizanteDto {

  @IsOptional()
  COTIID: number;

  //TODO: este es el campo de la relación, tener en cuenta como se manejaría.
  @IsNotEmpty()
  @IsNumber()
  COTITPIDENT: number;

  @IsNotEmpty()
  @IsString()
  COTIIDENT: string;

  @IsNotEmpty()
  @IsString()
  COTINOMB: string;

  @IsNotEmpty()
  @IsDateString()
  COTIFECR: Date;
  
  @IsNotEmpty()
  @IsString()
  COTIUSCR: string;
  
  @IsOptional()
  @IsString()
  COTIUSACT: string;

  @IsOptional()
  @IsDateString()
  COTIFEAC: Date; 

  @IsNotEmpty()
  @IsString()
  COTIESTADO: string;

}
