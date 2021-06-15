Cypress.Commands.add('getTokenAuthorization', (email, passowrd) => {
    cy.request({
        method: 'POST',
        url: '/login',
        body: {
            email: "fulano@qa.com",
            password: "teste"
        }
    }).its('body.authorization').should('not.be.empty')
        .then(authorization => {
            return authorization
        })
})

Cypress.Commands.add('deleteProducts', (productId, failStatusCode, auth) => {
    cy.request({
        method: 'DELETE',
        url: '/produtos/' + productId,
        headers: { Authorization: auth },
        failOnStatusCode: failStatusCode
    })
})


Cypress.Commands.add('changeProducts', (productId, failStatusCode, auth, json) => {
    cy.request({
        method: 'PUT',
        url: '/produtos/' + productId,
        headers: { Authorization: auth },
        body: json,
        failOnStatusCode: failStatusCode
    })
})

Cypress.Commands.add('toCart', (failStatusCode, auth, json) => {
    cy.request({
        method: 'POST',
        url: '/carrinhos',
        headers: { Authorization: auth },
        body: json,
        failOnStatusCode: failStatusCode
    })
})

Cypress.Commands.add('finishCart', (failStatusCode, auth) => {
    cy.request({
        method: 'DELETE',
        url: '/carrinhos/concluir-compra',
        headers: { Authorization: auth },
        failOnStatusCode: failStatusCode
    })
})