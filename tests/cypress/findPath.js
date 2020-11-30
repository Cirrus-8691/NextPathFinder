describe('Test find path', () => {
  
    beforeEach(() => {
      cy.visit('/')
    })
    it('Set values 0 => 4 and go', () => {
      cy.get("input#from").invoke('attr', 'value', 0);
      cy.get("input#to").invoke('attr', 'value', 4);
      cy.get("button#go").click();
      // --- click change page
      cy.get("li#path").contains("0 => 3 => 1 => 4");
    });
    it('Set values 0 => 1 and go', () => {
      cy.get("input#from").invoke('attr', 'value', 0);
      cy.get("input#to").invoke('attr', 'value', 1);
      cy.get("button#go").click();
      // --- click change page
      cy.get("li#path").contains("0 => 3 => 1");
    });

    it('Set values 1 => 0 and go', () => {
      cy.get("input#from").invoke('attr', 'value', 0);
      cy.get("input#to").invoke('attr', 'value', 1);
      cy.get("button#go").click();
      // --- click change page
      cy.get("li#path").contains("0 => 3 => 1");
    });
    it('Set values 1 => 2 and go', () => {
      cy.get("input#from").invoke('attr', 'value', 1);
      cy.get("input#to").invoke('attr', 'value', 2);
      cy.get("button#go").click();
      // --- click change page
      cy.get("li#path").contains("1 => 3 => 2");
    });
    it('Set values 2 => 4 and go', () => {
      cy.get("input#from").invoke('attr', 'value', 2);
      cy.get("input#to").invoke('attr', 'value', 4);
      cy.get("button#go").click();
      // --- click change page
      cy.get("li#path").contains("2 => 3 => 1 => 4");
  });
    it('Set values 2 => 0 and go', () => {
    cy.get("input#from").invoke('attr', 'value', 2);
    cy.get("input#to").invoke('attr', 'value', 0);
    cy.get("button#go").click();
    // --- click change page
    cy.get("li#path").contains("2 => 3 => 0");
  });

    it('Set values 3 => 4 and go', () => {
      cy.get("input#from").invoke('attr', 'value', 3);
      cy.get("input#to").invoke('attr', 'value', 4);
      cy.get("button#go").click();
      // --- click change page
      cy.get("li#path").contains("3 => 1 => 4");
    }); 
    it('Set values 3 => 0 and go', () => {
      cy.get("input#from").invoke('attr', 'value', 3);
      cy.get("input#to").invoke('attr', 'value', 0);
      cy.get("button#go").click();
      // --- click change page
      cy.get("li#path").contains("3 => 0");
    }); 

    it('Set values 4 => 2 and go', () => {
        cy.get("input#from").invoke('attr', 'value', 4);
        cy.get("input#to").invoke('attr', 'value', 2);
        cy.get("button#go").click();
        // --- click change page
        cy.get("li#path").contains("4 => 1 => 3 => 2");
    });
    it('Set values 4 => 0 and go', () => {
        cy.get("input#from").invoke('attr', 'value', 4);
        cy.get("input#to").invoke('attr', 'value', 0);
        cy.get("input#by").invoke('attr', 'value', 'co');
        cy.get("button#go").click();
        // --- click change page
        cy.get("li#path").contains("4 => 1 => 3 => 0");
    });
})