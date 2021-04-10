/* eslint-disable no-undef */

import arabic from '../../../i18n/ar.json'

const deviceSizes = Cypress.env( 'deviceSizes' ),
	languageData = Cypress.env( 'ar' )

deviceSizes.forEach( screenSize => {
	describe( 'Validates the arabic Homepage for ' + screenSize + ' View', () => {
		beforeEach( () => {
			cy.viewport( screenSize )
		} )

		it( 'Validates the "arabic" in the URL', () => {
			cy.visit( '/articles/arabic.html' )

			cy.validateUrl( 'arabic' )
		} )

		it( 'Validates the Header of the page', () => {
			let fontSize
			if ( screenSize === 'macbook-15' ) {
				fontSize = '32'
			} else {
				fontSize = '18'
			}
			cy.validateHeader( fontSize )
		} )

		it( 'Validates the loading of Background image', () => {
			cy.get( '.cover' ).should( 'be.visible' )
		} )

		it( 'Validates the loading of all the images', () => {
			cy.validateAllImagesLoad()
		} )

		it( 'Validates the Title of the page', () => {
			cy.validateTitle( languageData.title )
		} )

		it( 'Validates the Paragraphs of the page', () => {
			cy.validateParagraphs()
		} )

		it( 'Validates the Wikipedia Previews across the page', () => {

			cy.validatesWikipediaPreviews( arabic[ 'continue-reading' ], arabic[ 'read-more' ] )
		} )

		it( 'Validates Footer of the page', () => {

			cy.validateFooter( languageData.footer, '12' )
		} )
		it( 'Validates URL in Footer', () => {
			cy.validateUrlInFooter( languageData.footerInURL )
		} )
	} )
} )
