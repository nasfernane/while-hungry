import { PartialType } from '@nestjs/swagger';
import { CreateClapDto } from './create-clap.dto';

export class UpdateClapDto extends PartialType(CreateClapDto) {}
