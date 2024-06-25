

describe('Wikipedia Homepage', () => {
    beforeEach(() => {
      cy.visit('https://www.wikipedia.org/');
    });
  
    it('should load the Wikipedia homepage', () => {
      cy.get('.central-featured-logo').should('be.visible');
    });
  
    it('should have a search input field', () => {
      cy.get('input#searchInput').should('be.visible');
    });
  
    it('display the correct number of languages in language list', () => {
      cy.get('.central-featured-lang').should('have.length', 10);
    });
  
    it('should search and navigate to the results page', () => {
      const search = 'Cypress (software)';
  
      cy.get('input#searchInput').type(search);
  
      cy.get('button[type="submit"]').click();
  

  
      cy.get('#firstHeading').should('contain', search);
    });
  
    it('should switch to a different language', () => {
      cy.get('a#js-link-box-es').click();
  
      cy.url().should('include', 'es.wikipedia.org');
    });
    it('should check whether the Terms of Use is Present in the page', () => {
        cy.contains('Terms of Use').should('be.visible').click();
    });
    it('should check whether the Privacy Policy is Present in the page', () => {
        cy.contains('Privacy Policy').should('be.visible').click();
    });
    it('should check 13 other projects of wikipedia', () => {
        cy.get('.other-project').should('have.length', 13);
    });
    it('should have Google Play Store and App Store badges', () => {
        cy.get('.svg-badge_google_play_store').should('be.visible').click();
        cy.get('.svg-badge_ios_app_store').should('be.visible').click();
    });
    it('should check the suggestions visible after typing something in the input field', () => {
        const query = 'Cypress';
        cy.get('input#searchInput').type(query);
        cy.get('.suggestions-dropdown').should('be.visible');
    });
    it('should select african language from the dropdown', () => {
        cy.get('#searchLanguage').select('af');
    });
    it('Read Wikipedia in your language Dropdown', () => {
        cy.get('#js-lang-list-button').click();

    });


  });
  