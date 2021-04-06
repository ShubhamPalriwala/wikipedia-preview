/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add( 'wikipediaReadMore', ()=>{
	cy.get( ' .wikipediapreview-footer-cta-readmore ' )
} )

Cypress.Commands.add( 'wikipediaReadOnWiki', ()=>{
	cy.get( '.wikipediapreview-footer-cta-readonwiki' )
} )

Cypress.Commands.add( 'wikipediaCloseBtn', ()=>{
	cy.get( '.wikipediapreview-header-closebtn' )
} )
