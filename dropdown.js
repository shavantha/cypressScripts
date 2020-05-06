/// <reference types="Cypress"/>

//static dropdown
describe('my first test',function(){
    it('Navigate to select checkbox', function(){
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      cy.get('select').select('option2').should('have.value','option2')
      })
    })