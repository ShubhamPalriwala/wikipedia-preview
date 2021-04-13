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

Cypress.Commands.add( 'paragraphAtPosition', ( index ) => {
	// Fetches the paragraph present at the indexed position on the page.
	cy.get( '.content > :nth-child(' + index + ')' )
} )

Cypress.Commands.add( 'validateAllImagesLoad', () => {
	cy.get( 'img' ).each( ( _ele, index ) => {
		// Fetches all the images and then checks each of them one by one.

		cy.get( 'img' ).should( ( $img ) => {

			/*
				"naturalWidth" and "naturalHeight" are set when the image loads
                thus if they are greater than 0 that means the image has successfully loaded.
                Here `should('be.visible')` could not be used since some of the images are
				hidden by default.
                */
			expect( $img[ index ].naturalWidth ).to.be.greaterThan( 0 )
		} )
	} )

} )

Cypress.Commands.add( 'validateFooter', ( footerText, fontSize ) => {
	/*
		Check if the footer of the page is visible and matches the one provided in cypress.json.
		It also checks the CSS and font size as displayed in the Desktop version of the webpage.
		*/
	cy.get( '.footer ' ).should( 'be.visible' ).contains( footerText ).should( 'have.css', 'font-size', fontSize + 'px' )
} )

Cypress.Commands.add( 'validateHeader', ( fontSize ) => {
	/*
		Check if the header of the page is visible and matches the one provided in cypress.json.
		It also checks the CSS and font size as it is on the webpage.
	*/
	cy.get( '.header' ).should( 'be.visible' ).and( 'have.text', 'Wikipedia Preview demo' ).and( 'have.css', 'font-size', fontSize + 'px' )

	// Check if first 'a' link tag i.e the header link redirects the user to ../index.html.
	cy.get( 'a' ).first().should( 'have.attr', 'href', '../index.html' )

} )

Cypress.Commands.add( 'validateParagraphs', () => {

	cy.get( '.content > ' ).each( ( _$para, index ) => {
		index++
		/*
			Check if each of the paragraph is visible. This is dynamic and is independent of the
			number of paragraphs the article has.
		 	*/
		cy.paragraphAtPosition( index ).should( 'be.visible' )
	} )
} )

Cypress.Commands.add( 'validateTitle', ( title ) => {

	// Check if the title of the page is visible and matches the one provided in cypress.json.
	cy.get( '.title > p' ).should( 'be.visible' ).and( 'have.text', title )
} )

Cypress.Commands.add( 'validateUrl', ( nameInHTML ) => {

	// Validates if the URL contains "nameInHTML".
	cy.url().should( 'contain', nameInHTML + '.html' )
} )

Cypress.Commands.add( 'validateUrlInFooter', ( footerUrl ) => {
	/*
		Checks if the Footer leads the user to the URL mentioned in cypress.json which
		in turn is taken from the html file.
		*/
	cy.get( '.footer > p > a' ).should( 'have.attr', 'href', footerUrl )
} )

Cypress.Commands.add( 'validatesWikipediaPreviews', ( continueReading, readMoreOnWiki ) => {

	// We visit the URL defined in cypress.json in the root directory.

	describe( 'Checks Each Popup one by one', () => {
		// This selects 1 hyperlink at a time
		cy.get( '.wmf-wp-with-preview' ).each( ( ele ) => {

			// This clicks on the hyperlink and checks if the popup is visible or not.
			cy.get( ele )
				.click()
				.should( 'be.visible' )

			// Checks if the header image of the wikipedia preview is visible or not.
			cy.get( '.wikipediapreview-header-image' ).should( 'be.visible' )

			/* This verifies that the "continue reading" text is same as the one mentioned
			 in i18n english file and then we click on the "read more" button */
			cy.wikipediaReadMore().contains( continueReading ).should( 'be.visible' ).click().as( 'readMore' ).wait( 100 )

			// Checks if the image row at the bottom of the wikipedia preview is visible or not.
			cy.get( '.wikipediapreview-gallery-row' ).scrollIntoView().should( 'be.visible' )

			/* This clicks on the hyperlink and checks if the popup expands after we clicked in the
			 previous step ad checks the "read-more" from the i18n json english file */
			cy.wikipediaReadOnWiki().scrollIntoView()
				.should( 'be.visible' )
				.contains( readMoreOnWiki )

			// This closes this popup so we can move to the next popup in the loop.
			cy.wikipediaCloseBtn().scrollIntoView().click()
		} )
	} )
} )

Cypress.Commands.add( 'wikipediaCloseBtn', () => {
	// Selects the wikipedia close button on the webpage.
	cy.get( '.wikipediapreview-header-closebtn' )
} )

Cypress.Commands.add( 'wikipediaReadMore', () => {
	// Selects the wikipedia read more button.
	cy.get( ' .wikipediapreview-footer-cta-readmore ' )
} )

Cypress.Commands.add( 'wikipediaReadOnWiki', ()=>{
	// Selects the wikipedia read more on wikipedia button
	cy.get( '.wikipediapreview-footer-cta-readonwiki' )
} )
