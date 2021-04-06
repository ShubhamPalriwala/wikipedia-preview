/* eslint-disable no-undef */

/* Importing this to fetch the constants directly from the
i18n file instead of hardcoding them here. If there are any changes
in the i18n file in the future, no need to make extra changes in here */
import english from '../../../i18n/en.json'

it.only( 'Checks URL', () => {
	/* We visit the URL defined in cypress.json in the root directory */
	cy.visit( '/articles/english.html' )

	// We check if the URL has "english" mentioned in it
	describe( 'Check presence of word "english" in URL', () => {
		cy.url().should( 'include', '/english.html' )
	} )
} )

it.only( 'Checks Wikipedia Popup Translations', () => {
	// We visit the URL defined in cypress.json in the root directory
	cy.visit( '/articles/english.html' )

	describe( 'Checks Each Popup one by one', () => {
		// This selects 1 hyperlink at a time
		cy.get( '.wmf-wp-with-preview' ).each( ( ele, index ) => {
			index++
			// This clicks on the hyperlink and checks if the popup is visible or not
			cy.get( ':nth-child(' + index + ') > .wmf-wp-with-preview' )
				.click()
				.should( 'be.visible' )

			/* This verifies that the "continue reading" text is same as the one mentioned
			 in i18n english file and then we click on the "read more" button */
			cy.wikipediaReadMore().contains( english[ 'continue-reading' ] ).click()

			/* This clicks on the hyperlink and checks if the popup expands after we clicked in the
			 previous step ad checks the "read-more" from the i18n json english file */
			cy.wikipediaReadOnWiki()
				.should( 'be.visible' )
				.contains( english[ 'read-more' ] )

			// This closes this popup so we can move to the next popup in the loop
			cy.wikipediaCloseBtn().click()
		} )
	} )
} )
