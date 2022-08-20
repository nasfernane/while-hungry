import { Recipe, RecipeFavorite, RecipeInstruction, RecipeNote, RecipeReview, RecipeTag, RequiredIngredient, RequiredUstensil } from "@prisma/client";
import { RecipeComment } from "@prisma/client";
import { RecipeTagFull } from "./tags";

export type RecipeFull = Recipe & {
  author: {
    nickname: string,
    bio: string,
    createdAt: string,
    email: string,
    id: number,
    password: string,
    role: string,
    updatedAt: string,
  },
  recipeComments: RecipeComment[],
  recipeFavorites: RecipeFavorite[],
  recipeInstructions: RecipeInstruction[],
  recipeNotes: RecipeNote[],
  recipeReviews: RecipeReview[],
  recipeTags: RecipeTagFull[],
  requiredIngredients: RequiredIngredient[],
  requiredUstensils: RequiredUstensil[],
}
