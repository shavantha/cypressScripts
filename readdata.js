/// <reference types="Cypress"/>

describe('read data',function(){

    before(function(){
     //read from fixtures
     cy.fixture('example').then(function(data){
          this.data=data

     })
    })

    it('Navigate to Google search page', function(){
      cy.visit(Cypress.env('url')+"/angularpractice/")
      cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
      cy.get('select').select("Female")
      })
    })
  