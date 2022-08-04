export default (httpClient) => ({
  login: async ({ email, password }) => {
    const response = await httpClient.post('/auth/login', {
      email,
      password
    })
    let errors = null

    // se não houve resposta, houve algum erro
    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }

    return {
      data: response.data,
      errors
    }
  }
})
