/* eslint-disable no-undef */

const deviceSizes = Cypress.env( 'deviceSizes' ),
	languageData = Cypress.env( 'index' )
let index

deviceSizes.forEach( screenSize => {
	describe( 'Testing index page for ' + screenSize, () => {
		beforeEach( () => {
			/*
			Sets the viewport before the set of tests from the deviceSizes array to test
			both the platforms increasing the code coverage
			*/
			cy.viewport( screenSize )
			/*
			We used index variable to iterate through the elements in the article list
			We set the index to 0 before each test because after each iteration it reaches 7.
			Thus it is important to make it to 0 otherwise it would return an out of bounds error.
			*/
			index = 0
		} )

		it( 'Validates the "index" in the URL', () => {
			cy.visit( '/index.html' )

			cy.validateUrl( 'index' )
		} )

		it( 'Validates Article Preview Titles', () => {
			cy.get( '.listview >' ).each( () => {
				index++
				let fontSize = ( screenSize === 'macbook-15' ) ? '18px' : '16px'

				/*
				Validate the Article Titles one by one by comparing them to the
				data stored in cypress.json so that it can be easily accessible and
				change all the data at one place.
				*/
				cy.get( ':nth-child(' + index + ') > a > .title' ).should( 'be.visible' ).and( 'contains.text', languageData[ index - 1 ].title ).and( 'have.css', 'font-size', fontSize )
			} )
		} )

		it( 'Validates Article Preview Subtitles', () => {
			cy.get( '.listview >' ).each( () => {
				index++

				/*
				Validate the Article Subtitles one by one by comparing them to the
				data stored in cypress.json.
				*/
				cy.get( ':nth-child(' + index + ') > a > .subtitle' ).should( 'be.visible' ).and( 'contains.text', languageData[ index - 1 ].subtitle )
			} )
		} )

		it( 'Validates Article Preview Images', () => {
			cy.get( '.listview >' ).each( () => {
				index++

				// Validate the Article Preview Images one by one
				cy.get( ':nth-child(' + index + ') > a > .image > .cover' ).should( 'be.visible' )
			} )
		} )

		it( 'Validates Article Preview Content', () => {
			cy.get( '.listview >' ).each( () => {
				index++

				/*
				Validate the Article Preview Content one by one by comparing them to the
				data stored in cypress.json.
				*/
				cy.get( ':nth-child(' + index + ') > a > .content' ).should( 'be.visible' ).and( 'contains.text', languageData[ index - 1 ].content )
			} )
		} )

		it( 'Validates Footer of the page', () => {
			cy.validateFooter( 'Articles on this list are from Wikipedia, which is released under the Creative Commons Attribution-Share-Alike License 3.0.', '12' )
		} )

		it( 'Validates URL in Footer', () => {
			cy.validateUrlInFooter( 'https://github.com/wikimedia/wikipedia-preview' )
		} )
	} )

} )
