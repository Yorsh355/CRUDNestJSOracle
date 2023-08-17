import { PartialType } from '@nestjs/mapped-types';
import { CreateCotizanteDto } from './create-cotizante.dto';

export class UpdateCotizanteDto extends PartialType(CreateCotizanteDto) {}
