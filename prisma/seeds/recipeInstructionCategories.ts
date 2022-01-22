import { Prisma } from "@prisma/client"

export const recipeInstructionCategories: Prisma.RecipeInstructionCategoryCreateInput[] = [
    {
        name: "plain",
    },
    {
        name: "while",
    },
    {
        name: "for",
    },
    {
        name: "If"
    }
]