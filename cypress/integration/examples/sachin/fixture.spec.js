describe('Login with fixture data',function () {
    it('should try to login', function () {
        cy.visit('http://zero.webappsecurity.com/login.html');
        cy.fixture('./sachin/user').then((user) => {
            const username = user.username;
            const password = user.password;
            cy.get('#user_login').type(username);
            cy.get('#user_password').type(password);
            cy.contains('Sign in').click();
            cy.get('.alert-error')
                .should('be.visible')
                .and('contain','Login and/or password are wrong.');
        });
    });
})
