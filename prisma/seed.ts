import { PrismaClient } from "@prisma/client"

import { users } from './seeds/users';
import { recipes } from './seeds/recipes';
import { recipeInstructionCategories } from './seeds/recipeInstructionCategories';
import { recipeTags } from './seeds/recipeTags';
import { ingredients } from './seeds/ingredients';
import { ustensils } from './seeds/ustensils';
import { definitions } from './seeds/definitions';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding users...')
    for (const u of users) await prisma.user.create({ data: u })

    console.log('Seeding ingredients...')
    for (const i of ingredients) await prisma.ingredient.create({ data: i })

    console.log('Seeding ustensils...')
    for (const u of ustensils) await prisma.ustensil.create({ data: u })

    console.log('Seeding recipe tags...')
    for (const rt of recipeTags) await prisma.recipeTagList.create({ data: rt })

    console.log('Seeding instruction categories...')
    for (const ic of recipeInstructionCategories) await prisma.recipeInstructionCategory.create({ data: ic })

    console.log('Seeding recipes...')
    for (const r of recipes) await prisma.recipe.create({ data: r })

    console.log('Seeding definitions...')
    for (const d of definitions) await prisma.definition.create({ data: d })

    console.log('Seeding completed.')

}

main().catch((e) => {
    console.error(e)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
})