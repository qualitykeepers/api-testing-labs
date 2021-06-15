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
      
    afterEach(function () {
        // logout
        cy.contains('Sair').click('bottom')  
    })

    it('Cypress Test Case : Create Account from fixture data  ', function () {             
        cy.get('.dropdown-toggle').click('bottom')      
        cy.get('.dropdown-menu > :nth-child(1) > a').click('bottom')   
        cy.get('#nome').type('aTestAccount')        
        // salvar
        cy.get('.btn').click('bottom')                    
    })

    it('Cypress Test Case : Create "Receita" from fixe data = 100  ', function () {        
        cy.get(':nth-child(3) > a').click('bottom')    
        cy.contains('Tipo da Mo')    
        cy.get('form').should('contain', 'Tipo da Mov')  
        cy.get('#descricao').type(this.data.seubarriga.description)        
        cy.get('#data_transacao').type(this.data.seubarriga.dateMovValid)
        cy.get('#data_pagamento').type(this.data.seubarriga.datePayValid)        
        cy.get('#interessado').type(this.data.seubarriga.persons.personA)
        cy.get('#valor').type('100')               
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
    it('Cypress Test Case : Create "Receita" from fixe data = 6078.12  ', function () {        
        cy.get(':nth-child(3) > a').click('bottom')    
        cy.contains('Tipo da Mo')    
        cy.get('form').should('contain', 'Tipo da Mov')  
        cy.get('#descricao').type(this.data.seubarriga.description)        
        cy.get('#data_transacao').type('01/01/2020')
        cy.get('#data_pagamento').type('01/01/2020')        
        cy.get('#interessado').type(this.data.seubarriga.persons.personA)
        cy.get('#valor').type('6078.12')               
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
    it('Cypress Test Case : Create "Receita" from fixe data = 19  ', function () {        
        cy.get(':nth-child(3) > a').click('bottom')    
        cy.contains('Tipo da Mo')    
        cy.get('form').should('contain', 'Tipo da Mov')  
        cy.get('#descricao').type(this.data.seubarriga.description)        
        cy.get('#data_transacao').type(this.data.seubarriga.dateMovValid)
        cy.get('#data_pagamento').type(this.data.seubarriga.datePayValid)        
        cy.get('#interessado').type(this.data.seubarriga.persons.personA)
        cy.get('#valor').type('19')               
        cy.get('select#tipo').select('REC').should('have.value', 'REC')
        cy.get('select#conta option:selected').first()
        cy.get('[type="radio"]').check('0')  // pago 1 - pedente 0
        // botão salvar                
        cy.get('form').should('contain', 'Tipo da Mov')  
        cy.get('.btn').click('bottom') 
        cy.get('.alert')
            .should('be.visible')
            .should('contain', 'Movimentação adicionada com sucesso')
        cy.screenshot()         
    })

    it('Cypress Test Case : Create "Despesa" from fixe data= 400 ', function () {        
        cy.get(':nth-child(3) > a').click('bottom')    
        cy.contains('Tipo da Mo')    
        cy.get('form').should('contain', 'Tipo da Mov')  
        cy.get('#descricao').type(this.data.seubarriga.description)        
        cy.get('#data_transacao').type(this.data.seubarriga.dateMovValid)
        cy.get('#data_pagamento').type(this.data.seubarriga.datePayValid)        
        cy.get('#interessado').type(this.data.seubarriga.persons.personA)
        cy.get('#valor').type('400')     
        cy.get('select#tipo').select('DESP').should('have.value', 'DESP')
        cy.get('select#conta option:selected').first()
        cy.get('[type="radio"]').check('1') // pago 1 - pedente 0
        // botão salvar                
        cy.get('form').should('contain', 'Tipo da Mov')  
        cy.get('.btn').click('bottom') 
        cy.get('.alert')
            .should('be.visible')
            .should('contain', 'Movimentação adicionada com sucesso')

        
    })
    it('Cypress Test Case : Create "Despesa" from fixe data= 1200.90 ', function () {        
        cy.get(':nth-child(3) > a').click('bottom')    
        cy.contains('Tipo da Mo')    
        cy.get('form').should('contain', 'Tipo da Mov')  
        cy.get('#descricao').type(this.data.seubarriga.description)        
        cy.get('#data_transacao').type(this.data.seubarriga.dateMovValid)
        cy.get('#data_pagamento').type(this.data.seubarriga.datePayValid)        
        cy.get('#interessado').type(this.data.seubarriga.persons.personA)
        cy.get('#valor').type('1200.90')     
        cy.get('select#tipo').select('DESP').should('have.value', 'DESP')
        cy.get('select#conta option:selected').first()
        cy.get('[type="radio"]').check('1') // pago 1 - pedente 0
        // botão salvar                
        cy.get('form').should('contain', 'Tipo da Mov')  
        cy.get('.btn').click('bottom') 
        cy.get('.alert')
            .should('be.visible')
            .should('contain', 'Movimentação adicionada com sucesso')

        
    })
    
    it('Cypress Test Case : Create "Despesa" from fixe data= 200.5 ', function () {        
        cy.get(':nth-child(3) > a').click('bottom')    
        cy.contains('Tipo da Mo')    
        cy.get('form').should('contain', 'Tipo da Mov')  
        cy.get('#descricao').type(this.data.seubarriga.description)        
        cy.get('#data_transacao').type(this.data.seubarriga.dateMovValid)
        cy.get('#data_pagamento').type(this.data.seubarriga.datePayValid)        
        cy.get('#interessado').type(this.data.seubarriga.persons.personA)
        cy.get('#valor').type('200.50')     
        cy.get('select#tipo').select('DESP').should('have.value', 'DESP')
        cy.get('select#conta option:selected').first()
        cy.get('[type="radio"]').check('0') // pago 1 - pedente 0
        // botão salvar                
        cy.get('form').should('contain', 'Tipo da Mov')  
        cy.get('.btn').click('bottom') 
        cy.get('.alert')
            .should('be.visible')
            .should('contain', 'Movimentação adicionada com sucesso')
    })   

    it('Cypress Test Case : Check Balance ', function () {    
        // home 
        cy.get('.active > a').click('bottom')
        cy.get('tbody > tr > :nth-child(1)')
            .should('be.visible')
            .should('have.text', 'aTestAccount')
        cy.get('tbody > tr > :nth-child(2)')
            .should('be.visible')
            .should('have.text', '4577.22')
    })

    it('Cypress Test Case : Exclude 6078,12', function () {
        // resumo mensal
        cy.get(':nth-child(4) > a').click('bottom')        
        cy.get('thead > tr > :nth-child(1)')
            .should('be.visible')
            .should('contain', 'Descri')
        cy.get('select#mes').select('01').should('contain', 'Janeiro')
        cy.get('select#ano').select('2020').should('have.value', '2020')   
        cy.get('.btn').click('bottom')            
        // excluir         
            cy.get(':nth-child(1) > :nth-child(6) > a > .glyphicon').click('bottom')
            cy.get('.alert')
                .should('be.visible')
                .should('contain', 'Movimentação removida com sucesso!')
            cy.get(':nth-child(4) > a').click('bottom')                
    }) 
    it('Cypress Test Case : Final Check Balance ', function () {    
        // home 
        cy.get('.active > a').click('bottom')
        cy.get('tbody > tr > :nth-child(1)')
            .should('be.visible')
            .should('have.text', 'aTestAccount')
        cy.get('tbody > tr > :nth-child(2)')
            .should('be.visible')
            .should('have.text', '-1500.90')
    })
})