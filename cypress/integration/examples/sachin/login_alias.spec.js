describe('Test Login Page', function () {

    it('should Load Web site', function () {
        cy.visit('http://zero.webappsecurity.com/login.html');
        cy.url().should('contain', 'webappsecurity');
        cy.log('Loaded successfully');
    });

    it('should Enter User Name', function () {
        cy.get('#user_login').as('username');
        cy.get('@username').clear().type('Invalid User Name', { delay: 50 });
    });

    it('should Enter Password', function () {
        cy.get('#user_password').as('password');
        cy.get('@password').clear().type('Invalid Password', { delay: 50 });
    });

    it('should click remember me', function () {
        cy.get('#user_remember_me').click();
        cy.wait(5000);
    });

    it('should Click Sign In', function () {
        cy.contains('Sign in').click();
    });

    it('should Validate Error', function () {
        cy.get('.alert-error').contains('Login and/or password are wrong.');
    });
});
