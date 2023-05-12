/// <reference types="Cypress" />

describe('ilk test ', ()=> {
    
   
    it('Test Case-2',() => {
        cy.visit('https://poipanel-dev.retail.poilabs.com/')
        cy.wait(3000)       
       
        
        cy.get('#email').type('murat@poilabs.com')
       
        cy.get('#password').type('11111').find('id').should("have.value", "dondurma")
        
   
        //cy.get('#password').type('asdasd')    


        cy.get('.dx-button-content > .d-flex').click({force:true})

       
        
    })
})