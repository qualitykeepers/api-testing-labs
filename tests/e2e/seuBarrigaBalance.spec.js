describe('Scenario 7 - Balance ', function() {

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

    it('Cypress Test Case : Create "Receita" from fixed data  ', function () {        
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

    it('Cypress Test Case : Create "Despesa" from fixed data  ', function () {        
        cy.get(':nth-child(3) > a').click('bottom')    
        cy.contains('Tipo da Mo')    
        cy.get('form').should('contain', 'Tipo da Mov')  
        cy.get('#descricao').type(this.data.seubarriga.description)        
        cy.get('#data_transacao').type(this.data.seubarriga.dateMovValid)
        cy.get('#data_pagamento').type(this.data.seubarriga.datePayValid)        
        cy.get('#interessado').type(this.data.seubarriga.persons.personA)
        cy.get('#valor').type(this.data.seubarriga.valueFloat)     
        cy.get('select#tipo').select('DESP').should('have.value', 'DESP')
        cy.get('select#conta option:selected').first()
        cy.get('[type="radio"]').check('0') // pago 1 - pedente 0
        // botão salvar                
        cy.get('form').should('contain', 'Tipo da Mov')  
        cy.get('.btn').click('bottom') 
        cy.get('.alert')
            .should('be.visible')
            .should('contain', 'Movimentação adicionada com sucesso')
        cy.screenshot()
        
    })

})