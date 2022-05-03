import { Prisma } from '@prisma/client';

export const ingredients: Prisma.IngredientCreateInput[] = [
  {
    name: 'Tuna',
    description: 'Kind of a big fish',
  },
  {
    name: 'Salmon',
    description: 'Kind of a big fish',
  },
  {
    name: 'Swordfish',
    description: 'Kind of a big fish',
  },
  {
    name: 'Zuchini',
    description: 'A green vegetable, probably exposed to gamma rays',
  },
  {
    name: 'Carrot',
    description: 'A red vegetable that suits snowmen perfectly',
  },
  {
    name: 'Dill',
    description: 'This herb is kind of a big dill',
  },
  {
    name: 'Lime',
    description: 'Contains more acids than a hippie festival',
  },
];
