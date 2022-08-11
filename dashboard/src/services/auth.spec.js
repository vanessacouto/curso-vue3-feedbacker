import mockAxios from 'axios'
import AuthService from './auth'

jest.mock('axios')

describe('Validators utils', () => {
  // roda depois de todo o teste
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('deve retornar um token quando o usuario logar', async () => {
    const token = '122.123.123'
    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ data: { token } })
    })

    const response = await AuthService(mockAxios).login({
      email: 'igor@igor.me',
      password: '123'
    })
    expect(response.data).toHaveProperty('token')
    expect(response).toMatchSnapshot()
  })

  it('deve retornar um usuario quando o usuario se registrar', async () => {
    const user = {
      name: 'Vanessa Almeida C',
      password: '1234',
      email: 'vanessaca@email.com.br'
    }
    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ data: user })
    })

    const response = await AuthService(mockAxios).register(user)
    expect(response.data).toHaveProperty('name')
    expect(response.data).toHaveProperty('password')
    expect(response.data).toHaveProperty('email')
    expect(response).toMatchSnapshot('email')
  })

  it('deve dar erro quando nao nao encontrado', async () => {
    const errors = { status: 404, statusText: 'Not Found' }
    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ request: errors })
    })

    const response = await AuthService(mockAxios).login({
      email: 'igor@igor.me',
      password: '123'
    })
    expect(response.errors).toHaveProperty('status')
    expect(response.errors).toHaveProperty('statusText')
  })
})
