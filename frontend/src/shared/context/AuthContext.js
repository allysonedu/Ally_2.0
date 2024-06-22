// Todo o contexto da Autenticação!

import { useCallback, useState, useContext, createContext } from 'react';

import { acesso } from '../../api/allyApi'; // importação da API

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const allyData = JSON.parse(localStorage.getItem('@ally'));

    if (allyData) {
      return {
        token: allyData.token,
        user: allyData.user,
      };
    }
    return undefined;
  });
  // useCallback retorna uma função em memoria! - para não ser renderizada a todo momento!
  const signIn = useCallback(async ({ email, password }) => {
    const response = await acesso({ email, password });

    const { token, user } = response; // token é sempre usado quando vamos fazer uma request com o banco de dados!

    localStorage.setItem('@ally', JSON.stringify({ token, user }));

    setData(user);
  }, []); // podemos estar compartilhando informação do usuario por toda aplicação!

  const signOut = useCallback(() => {
    localStorage.removeItem('@ally');
    setData(undefined);
    console.log('signOut');
  }, []); // signOut é indentificar se o usuario saiu da aplicação!

  // compartilhamento de função de login!
  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data }}>
      {children}
    </AuthContext.Provider>
  );
};

// hook de signin
function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
export { AuthProvider, useAuth };
