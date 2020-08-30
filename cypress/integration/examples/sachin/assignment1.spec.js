describe('My first assignment', function () {
    it('should click on poetry', function () {
        cy.visit('http://books.toscrape.com/');
        // cy.xpath("//a[contains(text(),'Poetry')]").click();
        cy.get('a').contains('Poetry').click();
        // cy.get('h1').should('equal', 'Poetry');
    });

    it('should click on oli', function () {
        // cy.get("a[title='Olio']").click();
        cy.get('a').contains('Olio').click();
    });

    it('should verify book price', function () {
        // cy.get('#content_inner h1').should('eq', 'Olio');
        // cy.xpath('//h1[contains(text(),"Olio")]/following-sibling::p[1]').should('eq', '£23.88');
        cy.get('.price_color').contains('£23.88');
    });
});
