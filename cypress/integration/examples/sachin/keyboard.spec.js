describe('Keyboard press simulation', function () {
    it('should hit enter button', function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#searchTerm').type('Hello World {enter}');
    });
})
