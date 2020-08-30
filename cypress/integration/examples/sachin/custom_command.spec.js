describe('Custom command',function () {
    it('should Test custom command', function () {
        cy.visit('http://zero.webappsecurity.com/login.html');
        cy.login('username','password');
    });
})
