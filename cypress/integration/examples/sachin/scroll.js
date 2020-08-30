describe('Scroll on the page', function () {

    it('should scroll up', function () {
        cy.visit('https://devexpress.github.io/testcafe/example/');
        cy.wait(2000);
        cy.get('#submit-button').scrollIntoView();
        cy.wait(2000);
    });

    it('should scroll down', function () {
        cy.get('header').scrollIntoView();
        cy.wait(2000);
    });
})
