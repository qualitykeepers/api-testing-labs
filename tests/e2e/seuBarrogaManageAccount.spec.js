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
    
     it('Cypress Test Case : Create Account from fixture data  ', function () {             
        // Adicionar 2 contas
        for (var i = 1; i < 3; i++) {
            var accountName = this.data.seubarriga.accountName + ' '+i        
            cy.get('.dropdown-toggle').click('bottom')      
            cy.get('.dropdown-menu > :nth-child(1) > a').click('bottom')   
            cy.get('#nome').type(accountName)        
            // salvar
            cy.get('.btn').click('bottom')            
            cy.get('.alert')
                .should('be.visible')
                .should('contain', 'Conta adicionada com sucesso!')
            cy.screenshot()
        }
        
    })

    it('Cypress Test Case : Lists Accounts ', function () {
        var accountName = this.data.seubarriga.accountName + ' 2'
        cy.get('.dropdown-toggle').click('bottom')         
        cy.get('.dropdown-menu > :nth-child(2) > a').click('bottom')    
        cy.get('#tabelaContas')
            .find('tbody tr')
            .find('td')
            .first()
            .should('contain', accountName)  
        cy.get('#tabelaContas')
            .contains('td',  accountName)
            .should('be.visible')
        cy.screenshot()                
    })

    it('Cypress Test Case : Edit Account from fixture data  ', function () {
        var accountName = this.data.seubarriga.accountName + ' 2'
        var  accountChange = accountName + ' 2ed'
        cy.get('.dropdown-toggle').click('bottom')         
        cy.get('.dropdown-menu > :nth-child(2) > a').click('bottom')
        cy.get('tbody > :nth-child(1) > :nth-child(2)')                    
            .find('a:nth-child(1) > span:nth-child(1)')
            .should('have.class', 'glyphicon-edit') 
            .click('bottom')
        //cy.get('#tabelaContas > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2) > a:nth-child(1) > span:nth-child(1)').click('bottom')        
        cy.get('#nome')
            .should('have.value', accountName)              
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


    it('Cypress Test Case : Create "Receita" from fixture data  ', function () {        
        cy.get(':nth-child(3) > a').click('bottom')    
        cy.contains('Tipo da Mo')    
        cy.get('form').should('contain', 'Tipo da Mov')  
        cy.get('#descricao').type(this.data.seubarriga.description)        
        cy.get('#data_transacao').type(this.data.seubarriga.dateMovValid)
        cy.get('#data_pagamento').type(this.data.seubarriga.datePayValid)        
        cy.get('#interessado').type(this.data.seubarriga.persons.personA)
        cy.get('#valor').type(this.data.seubarriga.valueFloat)               
        cy.get('select#tipo').select('REC').should('have.value', 'REC')
        cy.get('select#conta option:selected').first()
        cy.get('[type="radio"]').check('1')  // pago 1 - pedente 0
        // botão salvar                
        cy.get('form').should('contain', 'Tipo da Mov')  
        cy.get('.btn').click('bottom') 
        cy.get('.alert')
            .should('be.visible')
            .should('contain', 'Movimentação adicionada com sucesso')
        cy.screenshot() 
        
    })

    // exlcusão 
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
            .should('contain', 'Conta em uso na movimenta')
        cy.screenshot() 
    })
})