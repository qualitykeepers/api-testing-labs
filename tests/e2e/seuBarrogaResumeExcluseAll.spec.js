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
                // excluir todos os registros
        // Usar condicional é flaky 
        // https://www.cypress.io/blog/2020/09/25/guest-post-retrying-your-tests-is-actually-a-good-thing-if-your-approach-is-right/#flaky-tests-are-still-an-anti-pattern

        
        var lengthTab =0        
        cy.get('#tabelaExtrato').find('td').each(function(row, i){                    
            expect(i)
            cy.get(':nth-child(1) > :nth-child(6) > a > .glyphicon').click('bottom')
                
        })
        

    })              

})