describe('Browser Action', function () {
    it('should load books website', function () {
        cy.visit('http://books.toscrape.com/', { timeout: 10000 });
        cy.url().should('include', 'books.toscrape.com');
    });

    it('should click on Travel category', function () {
        cy.get('a').contains('Travel').click();
        cy.get('h1').contains('Travel');
    });

    it('should display correct number of books', function () {
        cy.get('.product_pod')
            .its('length')
            .should('equal',11);
    });
});
