describe('Scenario 3 - Manage Account ', function() {

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

      afterEach(function () {
        // logout
        cy.contains('Sair').click('bottom')  
      })
    
     it('Cypress Test Case : Lists Accounts ', function () {
        cy.get('.dropdown-toggle').click('bottom')         
        cy.get('.dropdown-menu > :nth-child(2) > a').click('bottom')    
        cy.get('#tabelaContas')
            .find('tbody tr')
            .find('td')
            .first()
            .should('contain', this.data.seubarriga.accountName)  
        cy.get('#tabelaContas')
            .contains('td',  this.data.seubarriga.accountName)
            .should('be.visible')
        cy.screenshot()        
        cy.get('#tabelaContas')
            .find('tbody tr')
            .should('have.length', 4)})
            

    it('Cypress Test Case : Edit Account from fixture data  ', function () {
        cy.get('.dropdown-toggle').click('bottom')         
        cy.get('.dropdown-menu > :nth-child(2) > a').click('bottom')
        cy.get('tbody > :nth-child(1) > :nth-child(2)')                    
            .find('a:nth-child(1) > span:nth-child(1)')
            .should('have.class', 'glyphicon-edit') 
            .click('bottom')
        //cy.get('#tabelaContas > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2) > a:nth-child(1) > span:nth-child(1)').click('bottom')
        let accountChange = this.data.seubarriga.accountName + ' 2ed'
        cy.get('#nome')
            .should('have.value', this.data.seubarriga.accountName)              
            .clear()
            .type(accountChange)
        // salvar
        cy.get('.btn').click('bottom')            
        cy.get('.alert')
            .should('be.visible')
            .should('contain', 'Conta alterada com sucesso!')
        cy.screenshot() 
    })

    it('Cypress Test Case : Exclude Account from fixture data  ', function () {
        cy.get('.dropdown-toggle').click('bottom')         
        cy.get('.dropdown-menu > :nth-child(2) > a').click('bottom')
        //#tabelaContas > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2) > a:nth-child(2) > span:nth-child(1)
        //glyphicon glyphicon-remove-circle
        cy.get('tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2)')                    
            .find('a:nth-child(2) > span:nth-child(1)')
            .should('have.class', 'glyphicon-remove-circle') 
            .click('bottom')
        cy.get('.alert')
            .should('be.visible')
            .should('contain', 'Conta removida com sucesso!')
        cy.screenshot() 
    })

    it('Cypress Test Case : Try Exclude same Account from fixture data  ', function () {
        cy.get('.dropdown-toggle').click('bottom')         
        cy.get('.dropdown-menu > :nth-child(2) > a').click('bottom')
        //#tabelaContas > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2) > a:nth-child(2) > span:nth-child(1)
        //glyphicon glyphicon-remove-circle
        cy.get('tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2)')                    
            .find('a:nth-child(2) > span:nth-child(1)')
            .should('have.class', 'glyphicon-remove-circle') 
            .click('bottom')
        cy.get('.alert')
            .should('be.visible')
            .should('contain', 'Conta removida com sucesso!')
        cy.screenshot() 
    })
})