import { Injectable } from '@nestjs/common';

// prisma client
import { prisma } from '@wh/prisma-client';

// prisma schema
import { Recipe } from '@prisma/client';


@Injectable()
export class UpdateService {
  /**
   * update a recipe based on id
   * @param id
   * @param recipe
   * @returns updated recipe
   */
  async update(id: number, recipe: any): Promise<Recipe> {
    const updatedRecipe = await prisma.recipe.update({
      where: {
        id: id,
      },
      data: {
        author: { connect: { id: recipe.authorId } },
        name: recipe.name,
        picture: recipe.picture || null,
        difficulty: recipe.difficulty,
        cookTime: recipe.cookTime,
        serves: recipe.serves,
        description: recipe.description,
        unit: recipe.unit,
        recipeTags: {
          deleteMany: {},
          create: [...recipe.recipeTags],
        },
        requiredIngredients: {
          deleteMany: {},
          create: [...recipe.requiredIngredients],
        },
        recipeInstructions: {
          deleteMany: {},
          create: [...recipe.recipeInstructions],
        },
        recipeNotes: {
          deleteMany: {},
          create: [...recipe.recipeNotes],
        }
      },
    });

    // if (updatedRecipe) {
    //   for (const ingredient of recipe.requiredIngredients) {
    //     if (ingredient.id && ingredient.recipeId) {
    //       await prisma.requiredIngredient.update({
    //         where: {
    //           id: ingredient.id,
    //         },
    //         data: {
    //           ...ingredient
    //         },
    //       });
    //     } else {
    //       await prisma.requiredIngredient.create({
    //         data: {
    //           recipeId: id,
    //           ...ingredient
    //         },
    //       });
    //     }
    //   }

    //   for (const instruction of recipe.recipeInstructions) {
    //     if (instruction.id && instruction.recipeId) {
    //       await prisma.recipeInstruction.update({
    //         where: {
    //           id: instruction.id,
    //         },
    //         data: {
    //           ...instruction
    //         },
    //       });
    //     } else {
    //       await prisma.recipeInstruction.create({
    //         data: {
    //           recipeId: id,
    //           ...instruction
    //         },
    //       });
    //     }
    //   }

    //   for (const note of recipe.recipeNotes) {
    //     if (note.id && note.recipeId) {
    //       await prisma.recipeNote.update({
    //         where: {
    //           id: note.id,
    //         },
    //         data: {
    //           ...note
    //         },
    //       });
    //     } else {
    //       await prisma.recipeNote.create({
    //         data: {
    //           recipeId: id,
    //           ...note
    //         },
    //       });
    //     }
    //   }
    // }

    return updatedRecipe;
  }
}
