import { validateEmptyAndEmail, validateEmptyAndLength3 } from './validators'

describe('Validators utils', () => {
  it('deve dar erro de empty payload', () => {
    expect(validateEmptyAndLength3()).toBe('*Este campo é obrigatório')
  })

  it('deve dar erro de menos de 3 caracteres payload', () => {
    expect(validateEmptyAndLength3('12')).toBe(
      '*Este campo precisa de no mínimo 3 caracteres'
    )
  })

  it('deve retornar true quando passado o parametro correto', () => {
    expect(validateEmptyAndLength3('1234')).toBe(true)
  })

  it('deve dar erro com o payload empty', () => {
    expect(validateEmptyAndEmail()).toBe('*Este campo é obrigatório')
  })

  it('deve dar erro com um parametro invalido', () => {
    expect(validateEmptyAndEmail('emailerrado@')).toBe(
      '*Este campo precisa ser um e-mail'
    )
  })

  it('deve retornar true quando inserido um parametro correto', () => {
    expect(validateEmptyAndEmail('email@email.com.br')).toBe(true)
  })
})
