import { RecipeTag } from "@prisma/client"

export type RecipeTagFull = RecipeTag & {
  tag: {
    categoryId: number,
    createdAt: string,
    id: number,
    name: string,
    updatedAt: string,
  },
  
}