describe('Scenario 6 - Resume ', function() {

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

    it('Cypress Test Case : Create "Receita" from fixture data  ', function () {        
        cy.get(':nth-child(3) > a').click('bottom')    
        cy.contains('Tipo da Mo')    
        cy.get('form').should('contain', 'Tipo da Mov')  
        cy.get('#descricao').type('aTestResumeReceita')        
        cy.get('#data_transacao').type(this.data.seubarriga.dateMovValid)
        cy.get('#data_pagamento').type(this.data.seubarriga.datePayValid)        
        cy.get('#interessado').type('aTestResumeReceita')
        cy.get('#valor').type(this.data.seubarriga.valueInt)               
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

    it('Cypress Test Case : Create "Despesa" from fixture data  ', function () {        
        cy.get(':nth-child(3) > a').click('bottom')    
        cy.contains('Tipo da Mo')    
        cy.get('form').should('contain', 'Tipo da Mov')  
        cy.get('#descricao').type('aTestResumeDespesa')        
        cy.get('#data_transacao').type(this.data.seubarriga.dateMovValid)
        cy.get('#data_pagamento').type(this.data.seubarriga.datePayValid)        
        cy.get('#interessado').type('aTestResumeDespesa')
        cy.get('#valor').type(this.data.seubarriga.valueInt)     
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

     it('Cypress Test Case : Geral Report and excluse', function () {
        // resumo mensal
        cy.get(':nth-child(4) > a').click('bottom')        
        cy.get('thead > tr > :nth-child(1)')
            .should('be.visible')
            .should('contain', 'Descri')
        cy.get('select#mes').select('06').should('contain', 'Junho')
        cy.get('select#ano').select('2021').should('have.value', '2021')        
        cy.get('#tabelaExtrato')
            .should('be.visible')
            .should('contain', 'TestResumeReceita')
            .should('contain', 'TestResumeDespesa')
        // excluir 
        for (var i = 1; i < 3; i++) {                    
            cy.get(':nth-child(1) > :nth-child(6) > a > .glyphicon').click('bottom')
            cy.get('.alert')
                .should('be.visible')
                .should('contain', 'Movimentação removida com sucesso!')
            cy.get(':nth-child(4) > a').click('bottom')        
        }

    })              

})