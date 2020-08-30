describe('Working with input',function () {
    it('should override the current time', function () {
        const date = new Date(2020,3,10).getTime();
        cy.clock(date);
        cy.log(date);
    });
})
