/// <reference types="Cypress"/>

describe('my first test',function(){
  it('Navigate to Google search page', function(){
    cy.visit("http://www.google.com");
    cy.request("http://www.google.com").then((response)=>{
    expect(response.status).to.eq(200)
    })
  })
  it('Search for value on Google search page', function(){
    cy.visit("http://www.google.com");
    cy.get("input[type='text']").type("shavantha")
    cy.contains('Google Search').click()

    //Alias
    cy.get(':nth-of-type(2) > div > div').as("linkLocator")
    cy.get('@linkLocator').find('div#rso > div:nth-of-type(2) > div > div').should('have.length',2)
    cy.get('@linkLocator').find('div#rso > div:nth-of-type(2) > div > div').contains("Shavantha Weerasinghe - Senior Software Test Engineer ...").click({force: true})
 })


})
