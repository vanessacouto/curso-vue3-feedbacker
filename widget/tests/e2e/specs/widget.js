const APP_URL = process.env.APP_URL || 'http://localhost:8081'

describe('Widget', () => {
  it('checar se o botao do widget esta sendo mostrado', () => {
    cy.visit('APP_URL')
    cy.wait(2000)
    cy.get('#widget-open-button')
  })
})
