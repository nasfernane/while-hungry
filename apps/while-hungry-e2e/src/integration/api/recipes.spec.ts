import { Recipe } from '@prisma/client';

describe('API - Recipes', () => {
  const baseUrl = 'localhost:3000/api/recipes/';

  context('GET /recipes', () => {
    it('should return all the recipes', () => {
      cy.request({
        method: 'GET',
        url: baseUrl,
      }).should((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.eq(200);
        expect(response.body.length).to.eq(3);
        Cypress._.each(response.body, (recipe: Recipe) => {
          expect(recipe).to.have.all.keys(
            'author',
            'authorId',
            'cookTime',
            'createdAt',
            'description',
            'difficulty',
            'id',
            'name',
            'picture',
            'recipeComments',
            'recipeFavorites',
            'recipeInstructions',
            'recipeReviews',
            'recipeTags',
            'requiredIngredients',
            'requiredUstensils',
            'serves',
            'updatedAt'
          );
        });
      });
    });
  });

  context('GET /recipes/:id', () => {
    it('should return a recipe from id', () => {
      const id = '1';

      cy.request({
        method: 'GET',
        url: baseUrl + id,
      }).should((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.eq(200);
        expect(response.body).to.have.all.keys(
          'author',
          'authorId',
          'cookTime',
          'createdAt',
          'description',
          'difficulty',
          'id',
          'name',
          'picture',
          'recipeComments',
          'recipeFavorites',
          'recipeInstructions',
          'recipeReviews',
          'recipeTags',
          'requiredIngredients',
          'requiredUstensils',
          'serves',
          'updatedAt'
        );
      });
    });
  });

  context('POST /recipes, { body }', () => {
    it('should create a recipe', () => {
      cy.request({
        method: 'POST',
        url: baseUrl,
        body: {
          name: 'Seabass tartare',
          difficulty: 'Easy',
          authorId: 1,
          cookTime: 4,
          serves: 4,
          description: 'Simple seabass tartare with a hint of parsley.',
        },
      }).should((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.eq(201);
      });
    });
  });

  context('UPDATE /recipes/:id, { body }', () => {
    it('should update a recipe', () => {
      const id = '1';

      cy.request({
        method: 'PATCH',
        url: baseUrl + id,
        body: {
          name: 'Salmon tartare',
          difficulty: 'Easy',
          authorId: 1,
          cookTime: 4,
          serves: 4,
          description: 'Simple salmon tartare with a hint of parsley.',
        },
      }).should((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.eq(200);
      });
    });
  });
});
