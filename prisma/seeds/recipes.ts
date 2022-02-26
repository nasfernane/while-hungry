import { Prisma } from "@prisma/client"

export const recipes: Prisma.RecipeCreateInput[] = [
    {
        author: { connect: { id: 1 } },
        name: "Salmon tartare",
        cookTime: 4,
        serves: 4,
        description: "Simple salmon tartare with a hint of dill.",
        difficulty: "Hard",
        unit: 'metrics',
        recipeInstructions: {
            create: [
                {
                    categoryId: 4, // if
                    instruction: "Get the fish out of the fridge."
                },
                {
                    categoryId: 1,
                    instruction: "Parer le saumon puis le trancher en petits cubes réguliers. Assaisonner avec des pluches d'aneth et du citron vert."
                }
            ]
        },
        requiredIngredients: {
            create: [
                {
                    Ingredient: { connect: { id: 2 } },
                    quantity: 1,
                    unit: "piece",
                },
                {
                    Ingredient: { connect: { id: 6 } },
                    quantity: 50,
                    unit: "grams"
                },
                {
                    Ingredient: { connect: { id: 7 } },
                    quantity: 1,
                    unit: "piece",
                }
            ]
        },
        requiredUstensils: {
            create: [
                { Ustensil: { connect: { id: 1 } } },
                { Ustensil: { connect: { id: 3 } } },
            ]
        },
        recipeComments: {
            create: [
                {
                    comment: "Not bad !",
                    userId: 1
                },
                {
                    comment: "My 3yo cousin threw up after tasting this.",
                    userId: 2
                },
                {
                    comment: "Best recipe ever !",
                    userId: 3
                },

            ]
        },
        recipeReviews: {
            create: [
                {
                    review: 3,
                    authorId: 1,
                },
                {
                    review: 1,
                    authorId: 2,
                },
                {
                    review: 5,
                    authorId: 3
                }
            ]
        },
        recipeTags: {
            create: [
                {
                    tagId: 2
                },
                {
                    tagId: 4
                }
            ]
        },
        recipeFavorites: {
            create: [
                {
                    userId: 1
                },
                {
                    userId: 2
                }

            ]
        }
    },
    {
        author: { connect: { id: 2 } },
        name: "Thuna tartare",
        cookTime: 4,
        serves: 2,
        description: "Simple thuna tartare with a hint of tarragon.",
        difficulty: "Medium",
        unit: 'metrics',
        recipeInstructions: {
            create: [
                {
                    categoryId: 4, // if
                    instruction: "Get the fish out of the fridge."
                },
                {
                    categoryId: 1,
                    instruction: "Parer le thon puis le trancher en petits cubes réguliers. Assaisonner avec des pluches d'aneth et du citron vert."
                }
            ]
        },
        requiredIngredients: {
            create: [
                {
                    Ingredient: { connect: { id: 1 } },
                    quantity: 1,
                    unit: "piece",
                },
                {
                    Ingredient: { connect: { id: 6 } },
                    quantity: 1,
                    unit: "teaspoon"
                },
                {
                    Ingredient: { connect: { id: 7 } },
                    quantity: 1,
                    unit: "piece",
                }
            ]
        },
        requiredUstensils: {
            create: [
                { Ustensil: { connect: { id: 1 } } },
                { Ustensil: { connect: { id: 3 } } },
            ]
        },
        recipeComments: {
            create: [
                {
                    comment: "Not bad !",
                    userId: 1
                },
                {
                    comment: "My 3yo cousin threw up after tasting this.",
                    userId: 2
                },
                {
                    comment: "Best recipe ever !",
                    userId: 3
                },

            ]
        },
        recipeReviews: {
            create: [
                {
                    review: 3,
                    authorId: 1,
                },
                {
                    review: 1,
                    authorId: 2,
                },
                {
                    review: 5,
                    authorId: 3
                }
            ]
        },
        recipeTags: {
            create: [
                {
                    tagId: 1
                },
                {
                    tagId: 4
                }
            ]
        },
        recipeFavorites: {
            create: [
                {
                    userId: 2
                },
                {
                    userId: 3
                }

            ]
        }
    },
    {
        author: { connect: { id: 2 } },
        name: "Swordfish tartare",
        cookTime: 4,
        serves: 1,
        description: "Simple swordfish tartare with a hint of coriander.",
        difficulty: "Easy",
        unit: 'us',
        recipeInstructions: {
            create: [
                {
                    categoryId: 1, // if
                    instruction: "Get the fish out of the fridge."
                },
                {
                    categoryId: 1, // if
                    instruction: "Give Gwen a kiss."
                },
                {
                    categoryId: 1,
                    instruction: "Parer l'espadon puis le trancher en petits cubes réguliers. Assaisonner avec des pluches d'aneth et du citron vert."
                }
            ]
        },
        requiredIngredients: {
            create: [
                {
                    Ingredient: { connect: { id: 3 } },
                    quantity: 1,
                    unit: "piece",
                },
                {
                    Ingredient: { connect: { id: 6 } },
                    quantity: 1,
                    unit: "teaspoon"
                },
                {
                    Ingredient: { connect: { id: 7 } },
                    quantity: 1,
                    unit: "piece",
                }
            ]
        },
        requiredUstensils: {
            create: [
                { Ustensil: { connect: { id: 1 } } },
                { Ustensil: { connect: { id: 3 } } },
            ]
        },
        recipeComments: {
            create: [
                {
                    comment: "Not bad !",
                    userId: 1
                },
                {
                    comment: "My 3yo cousin threw up after tasting this.",
                    userId: 2
                },
                {
                    comment: "Best recipe ever !",
                    userId: 3
                },

            ]
        },
        recipeReviews: {
            create: [
                {
                    review: 3,
                    authorId: 1,
                },
                {
                    review: 1,
                    authorId: 2,
                },
                {
                    review: 5,
                    authorId: 3
                }
            ]
        },
        recipeTags: {
            create: [
                {
                    tagId: 3
                },
                {
                    tagId: 5
                }
            ]
        },
        recipeFavorites: {
            create: [
                {
                    userId: 1
                },
                {
                    userId: 3
                }

            ]
        }
    },
]