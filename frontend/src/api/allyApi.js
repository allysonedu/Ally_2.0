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

const forgotPassword = async email => {
  try {
    const response = await api.post('/forgot', { email });
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const resetPassword = async ({ token, password }) => {
  try {
    const response = await api.patch(`/reset-password/${token}`, { password });

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export { acesso, forgotPassword, resetPassword };
