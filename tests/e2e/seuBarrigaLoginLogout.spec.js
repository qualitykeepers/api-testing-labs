const { afterEach } = require("mocha");

describe('Scenario 2 - Login Incorrect ', function() {

  beforeEach(function () {
    cy.fixture('exampleSeuBarriga').then(function (data) {
      this.data = data;
    })
    cy.visit('/');
    cy.get('#bs-example-navbar-collapse-1 > ul > li.active > a').click('bottom')
    cy.get('.active > a').click('bottom')  
  })

  afterEach( function (){
    cy.get('body > div.jumbotron.col-lg-4 > form > button').click('bottom')      
    cy.get('.alert').should('contain', 'Problemas com o login')
    cy.screenshot() 
  })

  it('Cypress Test Case : Fail Login : Email Invalid ', function () {
     
      cy.get('#email').type(this.data.seubarriga.emailInvalid)
      cy.get('#senha').type(this.data.seubarriga.passfixe) // passCorrect
    
  })

  it('Cypress Test Case : Fail Login : Password Invalid ', function () {
    //Provide the data read from the fixture
    
    cy.get('#email').type(this.data.seubarriga.emailfixe)
    cy.get('#senha').type(this.data.seubarriga.passIncorrect)
  
})

  it('Cypress Test Case : Fail Login : Email and Password Invalid ', function () {
      //Provide the data read from the fixture    
      cy.get('#email').type(this.data.seubarriga.emailInvalid)
      cy.get('#senha').type(this.data.seubarriga.passIncorrect)
    
  })

})

describe('Scenario 2.4 - Login Obrigatorio Validator ', function() {

  before(function () {
    cy.fixture('exampleSeuBarriga').then(function (data) {
      this.data = data;
    })
    cy.visit('/');
    cy.get('#bs-example-navbar-collapse-1 > ul > li.active > a').click('bottom')
    cy.get('.active > a').click('bottom')
  })

  it('Cypress Test Case : Login : Email and Password Corrects ', function () {
    cy.get('body > div.jumbotron.col-lg-4 > form > button').click('bottom')      
    cy.get('.alert').should('contain', 'Email é um campo obriga')
    cy.get('.alert').should('contain', 'Senha é um campo obriga')
    cy.screenshot() 
  })

})

describe('Scenario 2.1 - Login Correct ', function() {

  before(function () {
    cy.fixture('exampleSeuBarriga').then(function (data) {
      this.data = data;
    })
    cy.visit('/');
    cy.get('#bs-example-navbar-collapse-1 > ul > li.active > a').click('bottom')
    cy.get('.active > a').click('bottom')
  })

  after( function (){
    cy.get('body > div.jumbotron.col-lg-4 > form > button').click('bottom')      
    cy.contains('Bem vindo').should('be.visible')
    cy.screenshot()  
  })

  it('Cypress Test Case : Login : Email and Password Corrects ', function () {
      //Provide the data read from the fixture
      cy.get('#email').type(this.data.seubarriga.emailfixe)
      cy.get('#senha').type(this.data.seubarriga.passfixe)
      
  })

})

describe('Scenario 2.2 - Logout ', function() {

  before(function () {
    cy.fixture('exampleSeuBarriga').then(function (data) {
      this.data = data;
    })
    cy.visit('/');
    cy.get('#bs-example-navbar-collapse-1 > ul > li.active > a').click('bottom')
    cy.get('.active > a').click('bottom')  
  })

  it('Cypress Test Case : Login and Logout', function () {
      cy.get('#email').type(this.data.seubarriga.emailfixe)
      cy.get('#senha').type(this.data.seubarriga.passfixe)
      cy.get('body > div.jumbotron.col-lg-4 > form > button').click('bottom')      
      cy.contains('Bem vindo').should('be.visible') 
      cy.contains('Sair').click('bottom')  
      cy.intercept('GET', '/logout', (req) => {
        expect(req.body).to.include('Login')
      })
      cy.url().should('include', '/logout')
      
      
  })

})