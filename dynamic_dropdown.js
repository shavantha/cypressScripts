/// <reference types="Cypress"/>

//static dropdown
describe('dynamic dropdown test',function(){
    it('Access dynamic dropdown test', function(){
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
      cy.get('#autocomplete').type('sr')
      cy.get('.ui-menu-item div').each(($e1, index, $list) => {
       
          if($e1.text()==="Sri Lanka")
          {
              $e1.click()
          }
    })
    cy.get('#autocomplete').should('have.value','Sri Lanka')
})
})