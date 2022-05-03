import { Prisma } from '@prisma/client';

export const recipeTags: Prisma.RecipeTagCategoryCreateInput[] = [
  {
    name: 'Seasonal',
    RecipeTagLabels: {
      create: [
        {
          name: 'Spring',
        },
        {
          name: 'Summer',
        },
        {
          name: 'Autumn',
        },
        {
          name: 'Winter',
        },
      ],
    },
  },
  {
    name: 'Country',
    RecipeTagLabels: {
      create: [
        {
          name: 'French',
        },
        {
          name: 'Italian',
        },
        {
          name: 'Spanish',
        },
        {
          name: 'Japanese',
        },
        {
          name: 'American',
        },
      ],
    },
  },
  {
    name: 'Type',
    RecipeTagLabels: {
      create: [
        {
          name: 'Soup',
        },
        {
          name: 'Salad',
        },
        {
          name: 'Stew',
        },
      ],
    },
  },
  {
    name: 'Specs',
    RecipeTagLabels: {
      create: [
        {
          name: 'Vegetarian',
        },
        {
          name: 'Healthy',
        },
        {
          name: 'Feel Good',
        },
        {
          name: 'Cheap',
        },
      ],
    },
  },
];
