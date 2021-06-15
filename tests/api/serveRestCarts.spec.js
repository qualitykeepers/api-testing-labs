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

describe('Scenrio 5', () => {

    // CREATE AND to cart em can EDIT 
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
                    const changeProduct = {
                        "nome": faker.random.uuid(),
                        "preco": faker.random.number(),
                        "descricao": "O melhor produto3 do mundo!",
                        "quantidade": "59986"
                    }
                    const cart = {
                        "produtos": [
                            {
                                "idProduto": "BeeJh5lz3k6kSIzA",
                                "quantidade": 10
                            },
                            {
                                "idProduto": productId,
                                "quantidade": 5
                            }
                        ]
                    }
                    cy.changeProducts(productId, false, tokenAuth, changeProduct)
                        .then(response => {
                            expect(response.status).to.equal(200)
                            expect(response.body.message).to.equal("Registro alterado com sucesso")
                        })

                    cy.toCart(false, tokenAuth, cart)
                    cy.request({
                        method: 'DELETE',
                        failOnStatusCode: false,
                        url: '/usuarios/0uxuPY0cbmQhpEz1',
                    }).then(response => {
                        expect(response.status).to.equal(400)
                        expect(response.body.message).to.equal("Não é permitido excluir usuário com carrinho cadastrado")
                    })
                    cy.deleteProducts(productId, false, tokenAuth)
                        .then(response => {
                            expect(response.status).to.equal(400)
                            expect(response.body.message).to.equal("Não é permitido excluir produto que faz parte de carrinho")
                        })
                    cy.finishCart(false, tokenAuth)

                })

            })
    })
})