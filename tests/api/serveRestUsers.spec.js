/// <reference types="Cypress" />

const allUsers = require('../fixtures/exampleServeRest.json');

describe('Scenario 2 - Users  ', function () {

  beforeEach(function () {
  })

  afterEach(function () {
  })

  // GET /usuários
  it('Existing User List', () => {
    cy.request({
      method: 'GET',
      url: '/usuarios'
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.usuarios[0].nome).to.equal('Fulano da Silva')
      expect(response.body.usuarios[0].email).to.equal('fulano@qa.com')
    })
  })  
  
  // POST a new user admin
  it('Create a new Admin', () => {
    cy.request({
      method: 'POST',
      url: '/usuarios',
      body: { 
        "nome": "adm",
        "email": "adm@qa.com",
        "password": "llf",
        "administrador": "true"
      }
    })
  })

  it('Create a new User', () => {
    cy.request({
      method: 'POST',
      url: '/usuarios',
      body: { 
        "nome": "user1",
        "email": "user1@qa.com",
        "password": "llf",
        "administrador": "false"
      }
    })
  })

  it('Create a new User with same e-mail', () => {
    cy.request({
      method: 'POST',
      failOnStatusCode: false,
      url: '/usuarios',
      body: { 
        "nome": "user2",
        "email": "user1@qa.com",
        "password": "llf",
        "administrador": "false"
      }
    }).then(response =>{
          expect(response.status).to.equal(400)
          expect(response.body.message).to.equal("Este email já está sendo usado") 
      })    
  })
})