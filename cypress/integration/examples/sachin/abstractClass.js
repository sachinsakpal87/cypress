class BasePage{
    static loadHomePage(){
        cy.visit('https://devexpress.github.io/testcafe/example/');
    }
    static wait(number){
        cy.wait(number);
    }
}

class HomePage extends BasePage{
    static scrollToBottom(){
        cy.get('#submit-button').scrollIntoView();
    }

    static scrollToTop(){
        cy.get('header').scrollIntoView();
    }
}
describe('Abstraction with classes',function () {

    it('should scroll down and up', function () {
        HomePage.loadHomePage()
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000);
    });
})
