//Creamos el modulo common para colocar el archivo de paginación, lo anterior teniendo en cuenta que la 
//paginación la podemos necesitar en diferentes módulos y no hace parte de un solo módulo en particular,
//esto permite su reutilización.

import { Type } from "class-transformer";
import { IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto{
  @IsOptional()
  @IsPositive()//Para hacer la conversión de tipos
  @Type(()=> Number)
  limit?: number;//Limite o cantidad máxima

  @IsOptional()
  @Type(()=> Number)//Es lo mismo que colocar globalmente enableImplicitConversions: true
  @Min(0)
  offset?: number; //Desplazamiento o posición inicial
}