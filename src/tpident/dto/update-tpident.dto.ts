import { PartialType } from '@nestjs/mapped-types';
import { CreateTpidentDto } from './create-tpident.dto';

export class UpdateTpidentDto extends PartialType(CreateTpidentDto) {}
