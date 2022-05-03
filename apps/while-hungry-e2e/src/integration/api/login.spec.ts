// import { User } from "@prisma/client";
import { user } from '../../fixtures/user';

describe('API - Login', () => {
  const baseUrl = 'localhost:3000/api/auth/';

  context('POST /auth, { body }', () => {
    it('should log the user', () => {
      cy.request({
        method: 'POST',
        url: baseUrl + 'login',
        body: user,
      }).should((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.eq(201);
        expect(response.body.email).to.not.be.null;
        expect(response.body.nickname).to.not.be.null;
        expect(response.body.role).to.not.be.null;
        expect(response.body.accessToken).to.not.be.null;
        expect(response.body.id).to.eq(2);
      });
    });
  });
});
