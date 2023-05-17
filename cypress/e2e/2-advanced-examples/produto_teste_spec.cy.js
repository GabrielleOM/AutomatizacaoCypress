describe ('Compra fake', () => {
    it('Adicionar produto', () => {
        cy.visit('http://165.227.93.41/lojinha-web/v2/');
        cy.get('#usuario').focus().type('admin');
        cy.get('#senha').focus().type('admin');
        cy.get('.btn').focus().click();
        cy.get('.waves-effect').click();
        cy.get('#produtonome').type('Cypress');
        cy.get('#produtovalor').type('100');
        cy.get('#produtocores').type('Branco');
        cy.get('button.btn').click();
        cy.get(':nth-child(4) > .grey').click();
        cy.get('[rev="200637"] > .title > a').should('exist')
        expect(Cypress).to.exist;




    });

});