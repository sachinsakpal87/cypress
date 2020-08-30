describe('Demo Screenshot', function () {
    it('should take full page screenshot', function () {
        cy.visit('https://devexpress.github.io/testcafe/example/');
        cy.screenshot({capture: 'fullPage'});
    });

    it('should take single element screenshot', function () {
        cy.get('header').screenshot();
        cy.get('#populate').screenshot();
    });
})
