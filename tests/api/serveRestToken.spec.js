/// <reference types="cypress" />

describe('Authorization and produt add', () => {
  it('Get Authorization', () => {
    cy.getTokenAuthorization('fulano@qa.com','teste')
      .then( tokenAuth => {
        cy.request({
          url : '/produtos',
          method: 'POST',
          headers: {
            Authorization: tokenAuth
          },
          body:{
            "nome": "Cachorrinho",
            "preco": 1,
            "descricao": "O melhor amigo do mundo",
            "quantidade": 100
          }
        })
      })
  })
})