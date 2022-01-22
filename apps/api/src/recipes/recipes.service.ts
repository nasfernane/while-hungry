import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Recipe } from '@wh/api-interfaces';

@Injectable()
export class RecipesService {
  recipes = [
    {
      id: 1,
      title: "Far Beyond The Sun",
      description: "A neo classical song by Yngwie Malmsteen"
    },
    {
      id: 2,
      title: "Sega Sunset",
      description: "A witch house banger by non other than Lorn "
    },
    {
      id: 3,
      title: "Norton Commander",
      description: "A chill alternative song by Men I Trust"
    }
  ]

  create(recipe: Recipe) {
    console.log(recipe);
  }

  findAll() {
    return this.recipes;
  }

  findOne(id: number) {
    return `This action returns a #${id} recipe`;
  }

  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return `This action updates a #${id} recipe`;
  }

  remove(id: number) {
    return `This action removes a #${id} recipe`;
  }
}
