describe('Scenario 3 - Create Account ', function() {

    beforeEach(function () {
        cy.fixture('exampleSeuBarriga').then(function (data) {
          this.data = data;
        })
        cy.visit('/');
        // login
        cy.get('.active > a').click('bottom')
        cy.get('#email').type("luanadfreitas@gmail.com")
        cy.get('#senha').type("llf") // passCorrect
        cy.get('body > div.jumbotron.col-lg-4 > form > button').click('bottom')        
      })

     it('Cypress Test Case : Create Account random data', function () {
        cy.get('.dropdown-toggle').click('bottom') 
        cy.get('.dropdown-menu > :nth-child(1) > a').click('bottom')
        cy.get('#nome').type(this.data.seubarriga.accountName)
        cy.contains('Salvar').click('bottom') 
        cy.get('.alert')
            .should('be.visible')
            .should('contain', 'Conta adicionada com sucesso!')
            .should('be.visible')        
        cy.get('#tabelaContas')
            .find('tbody tr')
            .should('contain', this.data.seubarriga.accountName)
    })
    it('Cypress Test Case : Create Account random data - duplicity', function () {
        cy.get('.dropdown-toggle').click('bottom') 
        cy.get('.dropdown-menu > :nth-child(1) > a').click('bottom')
        cy.get('#nome').type(this.data.seubarriga.accountName)
        cy.contains('Salvar').click('bottom') 
        cy.get('.alert')
            .should('be.visible')
            .should('contain', 'Já existe uma conta com esse nome!')
            .should('be.visible')               
    })

})