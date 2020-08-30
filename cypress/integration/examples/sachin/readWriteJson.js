describe('Read/Write data in json',function () {

    it('should Write json file', function () {
        cy.writeFile('log.json',{ name: "sachin", age:"30"});
    });

    it('should Write txt file', function () {
        cy.writeFile('log.txt',"Hello World !!");
    });

    it('should Read file', function () {
        cy.readFile('log.json').then((obj)=>{
            cy.log(obj.name);
            cy.log(obj.age);
        })

        cy.readFile('log.json').its('age').should('eq','30');
        cy.readFile('log.txt').should('eq','Hello World !!');
    });


    it('should read and verify browser document content', function () {
        cy.visit('http://www.example.com');
        cy.wait(2000)
        cy.document().its('contentType').should('eq','text/html');
        cy.document().should('have.property','charset').and('eq','UTF-8');
    });
})
