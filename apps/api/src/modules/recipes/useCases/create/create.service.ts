import { Injectable } from '@nestjs/common';

// prisma client
import { prisma } from '@wh/prisma-client';

// prisma schema
import { Recipe } from '@prisma/client';

@Injectable()
export class CreateService {
  async create(recipe: any): Promise<Recipe> {
    const newRecipe = await prisma.recipe.create({
      data: {
        author: { connect: { id: recipe.authorId } },
        name: recipe.name,
        picture: recipe.picture || null,
        difficulty: recipe.difficulty,
        cookTime: recipe.cookTime,
        serves: recipe.serves,
        description: recipe.description,
        unit: recipe.unit,
        requiredIngredients: {
          create: [...recipe.requiredIngredients],
        },
        recipeInstructions: {
          create: [...recipe.recipeInstructions],
        },
        recipeNotes: {
          create: [...recipe.recipeNotes],
        },
        recipeTags: {
          create: [...recipe.recipeTags],
        },
      },
    });

    return newRecipe;
  }

  async storePicture(picture: Express.Multer.File) {
    return picture;
  }
}
