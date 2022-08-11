const APP_URL = process.env.APP_URL || 'http://localhost:8080'

describe('Home', () => {
    it('deve renderizar o modal de criar conta quando clicar no botao de criar conta', () => {
        cy.visit(APP_URL) // acessa a pagina

        cy.get('#cta-create-account-button').click() // clica no botao de id 'cta-create-account-button'

        cy.get('#modal-create-account') // o modal deve ter aparecido na tela, pegar o modal
    })

    it('deve renderizar o modal de criar conta quando clicar no botao de criar conta da header', () => {
        cy.visit(APP_URL) // acessa a pagina

        cy.get('#header-create-account-button').click() 

        cy.get('#modal-create-account') // o modal deve ter aparecido na tela, pegar o modal
    })

    it('deve renderizar o modal de login quando clicar no botao de login da header', () => {
        cy.visit(APP_URL) // acessa a pagina

        cy.get('#header-login-button').click()

        cy.get('#modal-login') // o modal deve ter aparecido na tela, pegar o modal
    })

    it('deve logar com um email e senha', () => {
        cy.visit(APP_URL) // acessa a pagina

        cy.get('#header-login-button').click()
        cy.get('#modal-login') // o modal deve ter aparecido na tela, pegar o modal

        cy.get('#email-field').type('igor@igor.me')
        cy.get('#password-field').type('1234')
        cy.get('#submit-button').click()

        // se logar com sucesso, deve ir pra pagina de 'feedbacks'
        cy.url().should('include', '/feedbacks')
    })

    it('deve mostrar um erro quando o email for invalido', () => {
        cy.visit(APP_URL) // acessa a pagina

        cy.get('#header-login-button').click()
        cy.get('#modal-login') // o modal deve ter aparecido na tela, pegar o modal

        cy.get('#email-field').type('igor@')
        cy.get('#password-field').type('1234')
        cy.get('#submit-button').click()

        cy.get('#email-error')
    })

    it('deve funcionar o botao de logout', () => {
        cy.visit(APP_URL) // acessa a pagina

        cy.get('#header-login-button').click()
        cy.get('#modal-login') // o modal deve ter aparecido na tela, pegar o modal

        cy.get('#email-field').type('igor@igor.me')
        cy.get('#password-field').type('1234')
        cy.get('#submit-button').click()

        cy.url().should('include', '/feedbacks')
        cy.get('#logout-button').click()
        cy.url().should('include', '/')
    })
})