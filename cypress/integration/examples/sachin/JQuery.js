describe('Cypress Function', function () {
    before('Setup', function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it('should expose element in current window', function () {
        const signInButton = Cypress.$('#signin_button');
        signInButton.trigger('click');
    });
});
