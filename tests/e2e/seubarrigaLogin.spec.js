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
  })

  it('Cypress Test Case : Fail Login : Email Invalid ', function () {
     
      cy.get('#email').type(this.data.seubarriga.emailInvalid)
      cy.get('#senha').type(this.data.seubarriga.pass)
    
  })

  it('Cypress Test Case : Fail Login : Password Invalid ', function () {
    //Provide the data read from the fixture
    
    cy.get('#email').type(this.data.seubarriga.email)
    cy.get('#senha').type(this.data.seubarriga.passIncorrect)
  
})

  it('Cypress Test Case : Fail Login : Email and Password Invalid ', function () {
      //Provide the data read from the fixture
    
      cy.get('#email').type(this.data.seubarriga.emailInvalid)
      cy.get('#senha').type(this.data.seubarriga.passIncorrect)
    
  })
})

describe('Scenario 2 - Login Correct ', function() {

  before(function () {
    cy.fixture('exampleSeuBarriga').then(function (data) {
      this.data = data;
    })
  })

  after( function (){
    cy.get('body > div.jumbotron.col-lg-4 > form > button').click('bottom')      
    cy.contains('Bem vindo').should('be.visible') 
  })

  it('Cypress Test Case : Login : Email and Password Corrects ', function () {
      //Provide the data read from the fixture
  
      cy.get('#email').type(this.data.seubarriga.email)
      cy.get('#senha').type(this.data.seubarriga.pass)
      
  })
})