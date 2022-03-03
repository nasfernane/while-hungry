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
        avgReview: 3,
        recipeInstructions: {
            create: [
                {
                    categoryId: 4, // if
                    label: "Prepare the fish",
                    instruction: "Get the fish out of the fridge (that's a good start). Skin and bone the filets. Dice in small regular cubes."
                },
                {
                    categoryId: 1,
                    label: "Prepare the garnish",
                    instruction: "Finely chop the shallots and dried tomatoes. Pick the dill into smalls sprigs."
                },
                {
                  categoryId: 2,
                  label: "Finish and season",
                  instruction: "Mix the fish and the garnish together, season with a splah of olive oil and a pinch of sea salt."
                }
            ]
        },
        recipeNotes: {
          create: [
            { 
              label: "Fish",
              note: "Dont use defrost salmon for a tartare."
            },
            {
              label: "Seasonning",
              note: "If you prepare this dish in advance, taste and rectify the seasonning before serving since the fish will be colder."
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
        name: "Tuna tartare",
        cookTime: 4,
        serves: 2,
        description: "Simple tuna tartare with a hint of tarragon.",
        difficulty: "Medium",
        unit: 'metrics',
        avgReview: 5,
        recipeInstructions: {
            create: [
              {
                categoryId: 4, // if
                label: "Prepare the tuna",
                instruction: "Get the tuna out of the fridge (that's a good start). Skin and bone the filets. Dice in small regular cubes."
              },
              {
                  categoryId: 1,
                  label: "Prepare the garnish",
                  instruction: "Finely chop the shallots and dried tomatoes. Pick the dill into smalls sprigs."
              },
              {
                categoryId: 2,
                label: "Finish and season",
                instruction: "Mix the tuna and the garnish together, season with a splah of olive oil and a pinch of sea salt."
              }
            ]
        },
        recipeNotes: {
          create: [
            { 
              label: "Fish",
              note: "Dont use defrost tuna for a tartare."
            },
            {
              label: "Seasonning",
              note: "If you prepare this dish in advance, taste and rectify the seasonning before serving since the fish will be colder."
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
                    review: 5,
                    authorId: 1,
                },
                {
                    review: 5,
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
        avgReview: 2,
        recipeInstructions: {
            create: [
              {
                categoryId: 4, // if
                label: "Prepare the swordfish",
                instruction: "Get the swordfish out of the fridge (that's a good start). Skin and bone the filets. Dice in small regular cubes."
              },
              {
                  categoryId: 1,
                  label: "Prepare the garnish",
                  instruction: "Finely chop the shallots and dried tomatoes. Pick the dill into smalls sprigs."
              },
              {
                categoryId: 2,
                label: "Finish and season",
                instruction: "Mix the swordfish and the garnish together, season with a splah of olive oil and a pinch of sea salt."
              }
            ]
        },
        recipeNotes: {
          create: [
            { 
              label: "Fish",
              note: "Dont use defrost swordfish for a tartare."
            },
            {
              label: "Seasonning",
              note: "If you prepare this dish in advance, taste and rectify the seasonning before serving since the fish will be colder."
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
                    review: 2,
                    authorId: 1,
                },
                {
                    review: 1,
                    authorId: 2,
                },
                {
                    review: 3,
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