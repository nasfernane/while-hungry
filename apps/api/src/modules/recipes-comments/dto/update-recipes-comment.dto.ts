import { PartialType } from '@nestjs/swagger';
import { CreateRecipesCommentDto } from './create-recipes-comment.dto';

export class UpdateRecipesCommentDto extends PartialType(CreateRecipesCommentDto) {}
