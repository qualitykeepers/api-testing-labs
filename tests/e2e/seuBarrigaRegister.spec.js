describe('Scenario 2 - Create user with same data ', function() {

  beforeEach(function () {
    cy.fixture('exampleSeuBarriga').then(function (data) {
      this.data = data;
    })
    cy.visit('/');
    cy.get(':nth-child(2) > a').click('bottom')  
  })

  afterEach( function (){
    cy.contains('Cadastrar').click('bottom')  
    cy.get('.alert').should('contain', 'Endereço de email já utilizado')
    cy.screenshot() 
  })

  it('Cypress Test Case : Create User same e-mail ', function () {
        cy.get('#nome').type(this.data.seubarriga.name)
        cy.get('#email').type(this.data.seubarriga.emailfixe)
        cy.get('#senha').type(this.data.seubarriga.passfixe)
    
  })
  it('Cypress Test Case : Create User same e-mail, other pass ', function () {
    cy.get('#nome').type(this.data.seubarriga.name)
    cy.get('#email').type(this.data.seubarriga.emailfixe)
    cy.get('#senha').type(this.data.seubarriga.passIncorrect)

  })
})

describe('Scenario 1 - Create User ', function() {

    beforeEach(function () {
      cy.fixture('exampleSeuBarriga').then(function (data) {
        this.data = data;
      })
      cy.visit('/');
      cy.get(':nth-child(2) > a').click('bottom')  
    })
  
    afterEach( function (){
      cy.contains('Cadastrar').click('bottom')  
      cy.get('.alert').should('contain', 'Usuário inserido com sucesso')
      cy.screenshot() 
    })
  
    it('Cypress Test Case : Create User random data ', function () {
          cy.get('#nome').type(this.data.seubarriga.name)
          cy.get('#email').type(this.data.seubarriga.email)
          cy.get('#senha').type(this.data.seubarriga.pass)
      
    })
  })