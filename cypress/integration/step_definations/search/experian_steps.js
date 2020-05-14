import {Given, Then, When} from "cypress-cucumber-preprocessor/steps";


Given(/^I open the Experian page$/, () => {
    cy.visit(`/`)
});

Then(/^I should see title as "([^"]*)"$/, (websiteTileText) => {
    cy.get('head title')
    .should('contain', websiteTileText)
});



