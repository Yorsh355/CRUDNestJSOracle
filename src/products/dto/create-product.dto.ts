import { IsArray, IsIn, IsInt, 
  IsNumber, IsOptional,IsPositive, 
  IsString, MinLength 
} from "class-validator";


export class CreateProductDto {

  //El id se genera automáticamente
  
  @IsString()
  @MinLength(1)
  title: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  slug?: string;

  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;

  //cada uno de los elementos del arreglo debe ser string
  @IsString({each: true})
  @IsArray()
  sizes: string[];

  //que este en el arreglo
  @IsIn(['men', 'women', 'kid', 'unisex'])
  gender: string;

  @IsString({each: true})
  @IsArray()
  @IsOptional()
  tags?: string[];

  @IsString({each: true})
  @IsArray()
  @IsOptional()
  images?: string[];

}
