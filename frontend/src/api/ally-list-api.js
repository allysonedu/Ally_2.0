import { api } from '../shared/services'

/**
 *
 * @param {*} params (email, password)
 * @description: Chamada a API para login
 */

const login = async (params) => {
  try {
    const result = await api.post('/login', params)

    return result.data
  } catch (error) {
    throw new Error(error.message)
  }
}
export { login }
