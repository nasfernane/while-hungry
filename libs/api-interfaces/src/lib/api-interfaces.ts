export interface Instruction {
  categoryId: number,
  id: number,
  instruction: string,
  recipeId: number,
}

export interface Post{
  id: number,
  authorId: number,
  title: string,
  content: string,
  published: boolean,
  updatedAt: string
}

export interface Recipe {
  id: number,
  authorId: number,
  cooktime: number,
  difficulty: number,
  name: string,
  picture: any,
  prepTime: number,
  published: boolean,
  createdAt: string
  updatedAt: string
  recipeComments: Array<any>,
  recipeFavorites: Array<any>,
  recipeInstructions: Array<any>,
}