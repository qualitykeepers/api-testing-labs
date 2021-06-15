/// <reference types="cypress" />
const fs = require('fs');
var faker = require('faker');

// rand datas
var randProductName = faker.commerce.productName();
var randProductPrice = faker.commerce.price();
var randProductFloat = faker.datatype.float(2);
var randProductDescription = faker.commerce.productDescription();
var randProductQuantity = faker.datatype.number(999);

console.log(faker.commerce.productName)

describe('Scenario 4', () => {

    it('Insert a new Product without token', () => {
        cy.getTokenAuthorization('fulano@qa.com', 'teste')
            .then(tokenAuth => {
                cy.request({
                    url: '/produtos',
                    failOnStatusCode: false,
                    method: 'POST',
                    headers: {
                        Authorization: "tokenerrado"
                    },
                    body: {
                        "nome": "product1",
                        "preco": 90,
                        "descricao": "O melhor produto do mundo",
                        "quantidade": 1000
                    }
                }).then(response => {
                    expect(response.status).to.equal(401)
                    expect(response.body.message).to.equal("Token de acesso ausente, inválido, expirado ou usuário do token não existe mais")
                })
            })
    })

    // CREATE AND EXCLUDE
    it('Insert a new Product and Exclude', () => {
        cy.getTokenAuthorization('fulano@qa.com', 'teste')
            .then(tokenAuth => {
                cy.request({
                    url: '/produtos',
                    method: 'POST',
                    failOnStatusCode: false,
                    headers: {
                        Authorization: tokenAuth
                    },
                    body: {
                        "nome": randProductName,
                        "preco": randProductPrice,
                        "descricao": randProductDescription,
                        "quantidade": randProductQuantity
                    }
                }).then(response => {
                    let productId = response.body._id;
                    console.log(`product ${productId}`)
                    expect(response.status).to.equal(201)
                    expect(response.body.message).to.equal("Cadastro realizado com sucesso")
                    console.log(`product ${productId}`)
                    cy.deleteProducts(productId, true, tokenAuth)
                        .then(response => {
                            expect(response.status).to.equal(200)
                            expect(response.body.message).to.equal("Registro excluído com sucesso")
                        })
                })

            })
    })


    // CREATE AND EDIT
    it('Insert a new Product and Edit', () => {
        cy.getTokenAuthorization('fulano@qa.com', 'teste')
            .then(tokenAuth => {
                cy.request({
                    url: '/produtos',
                    method: 'POST',
                    failOnStatusCode: false,
                    headers: {
                        Authorization: tokenAuth
                    },
                    body: {
                        "nome": randProductName,
                        "preco": randProductPrice,
                        "descricao": randProductDescription,
                        "quantidade": randProductQuantity
                    }
                }).then(response => {
                    let productId = response.body._id;
                    console.log(`product ${productId}`)
                    expect(response.status).to.equal(201)
                    expect(response.body.message).to.equal("Cadastro realizado com sucesso")
                    console.log(`product ${productId}`)
                    const changeProduct = {
                        "nome": faker.random.uuid(),
                        "preco": faker.random.number(),
                        "descricao": "O melhor produto3 do mundo!",
                        "quantidade": "59986"
                    }
                    cy.changeProducts(productId, false, tokenAuth, changeProduct)
                        .then(response => {
                            expect(response.status).to.equal(200)
                            expect(response.body.message).to.equal("Registro alterado com sucesso")
                        })
                    cy.deleteProducts(productId, false, tokenAuth)

                })

            })
    })

    // CREATE AND EDIT token error
    it('Insert a new Product and Edit, without correct token ', () => {
        cy.getTokenAuthorization('fulano@qa.com', 'teste')
            .then(tokenAuth => {
                cy.request({
                    url: '/produtos',
                    method: 'POST',
                    failOnStatusCode: false,
                    headers: {
                        Authorization: tokenAuth
                    },
                    body: {
                        "nome": randProductName,
                        "preco": randProductPrice,
                        "descricao": randProductDescription,
                        "quantidade": randProductQuantity
                    }
                }).then(response => {
                    let productId = response.body._id;
                    console.log(`product ${productId}`)
                    expect(response.status).to.equal(201)
                    expect(response.body.message).to.equal("Cadastro realizado com sucesso")
                    console.log(`product ${productId}`)
                    const changeProduct = {
                        "nome": faker.random.uuid(),
                        "preco": faker.random.number(),
                        "descricao": "O melhor produto3 do mundo!",
                        "quantidade": "59986"
                    }
                    var tokenInvalid = "00asdasdasd";
                    cy.changeProducts(productId, false, tokenInvalid, changeProduct)
                        .then(response => {
                            expect(response.status).to.equal(401)
                            expect(response.body.message).to.equal("Token de acesso ausente, inválido, expirado ou usuário do token não existe mais")
                        })
                    cy.deleteProducts(productId, false, tokenInvalid)
                        .then(response => {
                            expect(response.status).to.equal(401)
                            expect(response.body.message).to.equal("Token de acesso ausente, inválido, expirado ou usuário do token não existe mais")
                        })

                })

            })
    })
})