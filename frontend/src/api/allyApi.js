import { api } from '../shared/services';
// isolação da API do Backend pro Frontend!
// for fazer alguma manutenção no metodo de API, vir direto aqui!
const acesso = async ({ email, password }) => {
  try {
    const response = await api.post('/login', { email, password });

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export { acesso };
