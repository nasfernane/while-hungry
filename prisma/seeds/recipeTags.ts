import { Prisma } from '@prisma/client';

export const recipeTags: Prisma.RecipeTagCategoryCreateInput[] = [
  {
    name: 'Seasonal',
    maxActiveTags: 1,
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
    maxActiveTags: 1,
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
    maxActiveTags: 2,
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
    maxActiveTags: 2,
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
