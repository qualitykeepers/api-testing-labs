describe('Scenario 2 - Users  ', function () {

  beforeEach(function () {
  })

  afterEach( function (){  
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

  // POST a new user
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
})