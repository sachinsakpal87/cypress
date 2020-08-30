describe('Select Box', function () {
    it('should load website', function () {
        cy.visit('https://devexpress.github.io/testcafe/example/');
    });

    it('should select Both', function () {
        cy.get('#preferred-interface').select('Both');
        cy.get('#preferred-interface').should('have.value','Both');
    });

    it('should select JavaScript API', function () {
        cy.get('#preferred-interface').select('JavaScript API');
        cy.get('#preferred-interface').should('have.value','JavaScript API');
    });
});
