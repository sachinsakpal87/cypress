describe('Cypress Test for visit', function () {
    it('should Test cypress visit functionality', function () {
        cy.visit('http://www.google.com', { timeout: 1000 });
    });

    it('should check correct url', function () {
        cy.url().should('include', 'www.google.com');
    });

    it('should check wait', function () {
        cy.wait(3000);
    });

    it('should check pause', function () {
        cy.pause();
    });

    it('should check for correct element on the page', function () {
        cy.get("div.FPdoLc.tfB0Bf>center > input[value='Google Search']").should('be.visible');
    });
});
