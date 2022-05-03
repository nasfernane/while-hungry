describe('API - Register', () => {
  const baseUrl = 'localhost:3000/api/auth/';

  context('POST /auth, { body }', () => {
    it('should register the user', () => {
      cy.request({
        method: 'POST',
        url: baseUrl + 'register',
        body: {
          email: 'jean-edern@gmail.com',
          nickname: 'Jean-edern',
          password: 'pw123',
        },
      }).should((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.eq(201);
        expect(response.body.email).to.not.be.null;
        expect(response.body.nickname).to.not.be.null;
        expect(response.body.role).to.not.be.null;
        expect(response.body.id).to.eq(4);
      });
    });
  });
});
