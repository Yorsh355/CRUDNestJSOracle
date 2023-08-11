import { PartialType } from '@nestjs/mapped-types';
import { CreateFactelecDto } from './create-factelec.dto';

export class UpdateFactelecDto extends PartialType(CreateFactelecDto) {}
