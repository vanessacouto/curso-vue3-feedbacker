const APP_URL = process.env.APP_URL || 'http://localhost:8080'

describe('Credencials', () => {
  it('deve gerar uma apiKey', () => {
    cy.visit(APP_URL) // acessa a pagina

    cy.get('#header-login-button').click()
    cy.get('#modal-login') // o modal deve ter aparecido na tela, pegar o modal

    cy.get('#email-field').type('igor@igor.me')
    cy.get('#password-field').type('1234')
    cy.get('#submit-button').click()

    cy.wait(4000) // espera por 4 segundos
    cy.visit(`${APP_URL}/credencials`)
    cy.wait(2000)

    const oldApikey = cy.get('#apikey').invoke('text') // pega o valor que está dentro do elemento 'apikey'
    cy.get('#generate-apikey').click()
    cy.wait(2000)
    const newApikey = cy.get('#apikey').invoke('text')

    expect(oldApikey).to.not.equal(newApikey)
  })
})
