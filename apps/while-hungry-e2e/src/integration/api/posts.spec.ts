import { Post } from '@prisma/client';

describe('API - Posts', () => {
  const baseUrl = 'localhost:3000/api/posts/';

  context('GET /posts', () => {
    it('should return all the posts', () => {
      cy.request({
        method: 'GET',
        url: baseUrl,
      }).should((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.eq(200);
        expect(response.body.length).to.eq(3);
        Cypress._.each(response.body, (post: Post) => {
          expect(post).to.have.all.keys(
            'author',
            'id',
            'authorId',
            'title',
            'content',
            'published',
            'createdAt',
            'updatedAt'
          );
        });
      });
    });
  });

  context('GET /posts/:id', () => {
    it('should return a post from id', () => {
      const id = '1';

      cy.request({
        method: 'GET',
        url: baseUrl + id,
      }).should((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.eq(200);
        expect(response.body).to.have.all.keys(
          'author',
          'id',
          'authorId',
          'title',
          'content',
          'published',
          'createdAt',
          'updatedAt'
        );
      });
    });
  });

  context('POST /posts, { body }', () => {
    it('should create a post', () => {
      cy.request({
        method: 'POST',
        url: baseUrl,
        body: {
          title: 'A post about vegetables',
          content: 'Vegetables are good for you. Except brussel sprouts.',
          authorId: 1,
        },
      }).should((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.eq(201);
      });
    });
  });

  context('UPDATE /posts/:id, { body }', () => {
    it('should update a post', () => {
      const id = '1';

      cy.request({
        method: 'PATCH',
        url: baseUrl + id,
        body: {
          title: 'A post about hummus',
          content: 'You can spread it on toast. Brilliant idea.',
          authorId: 1,
        },
      }).should((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.eq(200);
      });
    });
  });
});
