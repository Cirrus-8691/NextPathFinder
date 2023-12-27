describe('Test home page', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it('Find trail', () => {
        cy.contains("Find path from 0 to 4 by km")
            .should('have.attr', 'href', '/findPath?from=0&to=4&by=km');
    });
    it('Find input-from/to/by', () => {
        cy.get("input#from");
        cy.get("input#to");
        cy.get("input#by");
        cy.get("button#go");
    });
});