/// <reference types="Cypress"/>

//static dropdown
describe('dynamic dropdown test',function(){
    it('Access dynamic dropdown test', function(){
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
      cy.get('#alertbtn').click()
      cy.get('[value="Confirm"]').click()
      //swiching to the alert
      cy.on('window:alert',(str)=>
      {
          //Mocha
          expect(str).to.equal('Hello , share this practice page and share your knowledge')
      })
})
})