describe('Test Login Page', function () {
    it('should Load Web site', function () {
        cy.visit('http://zero.webappsecurity.com/login.html');
        cy.url().should('contain', 'webappsecurity');
        cy.log('Loaded successfully');
        cy.clearCookies({log:true});
        cy.clearLocalStorage('your item',{log:true});
        cy.title().should('include','Zero - Log in');
    });

    it('should Enter User Name', function () {
        cy.get('#user_login').clear().type('Invalid User Name', { delay: 50 });
    });

    it('should Enter Password', function () {
        cy.get('#user_password').clear().type('Invalid Password', { delay: 50 });
    });

    it('should click remember me', function () {
        cy.get('#user_remember_me').click();
        cy.wait(5000);
    });

    it('should Click Sign In', function () {
        cy.contains('Sign in').click();
    });

    it('should Validate Error', function () {
        cy.get('.alert-error')
            .should('be.visible')
            .and('contain','Login and/or password are wrong.');
    });
});
