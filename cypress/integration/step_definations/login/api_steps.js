import {Given, Then, When} from "cypress-cucumber-preprocessor/steps";

Given(/^I have made Get call for demo Api$/, () => {

    cy.request('https://api.ratesapi.io/api/latest').as('apiRequest')
    
});


Then(/^I should recive the response$/, () => {
  
    cy.get('@apiRequest')
    .its('status')
    .should('equal', 200)

    cy.get('@apiRequest')
    .its('headers')
    .its('content-type')
    .should('include', 'application/json')
});

Then(/^the base value should be "([^"]*)"$/, (baseValue) => {
    cy.get('@apiRequest').should((response) => {
        expect(response.body).to.have.property('base', baseValue)
      })
   
});