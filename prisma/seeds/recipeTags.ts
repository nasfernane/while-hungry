import { Prisma } from "@prisma/client"

export const recipeTags: Prisma.RecipeTagListCreateInput[] = [
    {
        name: "French",
    },
    {
        name: "Japanese",
    },
    {
        name: "Italien",
    },
    {
        name: "Healthy",
    },
    {
        name: "Vegetarian",
    }
]