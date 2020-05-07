/// <reference types="Cypress"/>

//static dropdown
describe('dynamic dropdown test',function(){
    it('Access dynamic dropdown test', function(){
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
      cy.get('[value="radio2').check().should('be.checked')

     
})
})