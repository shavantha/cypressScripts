describe('Mouse over test', function() 
{
 
it('Mouse over test',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 
cy.contains('Top').click({force:true})
cy.url().should('include','top')
  
})

})