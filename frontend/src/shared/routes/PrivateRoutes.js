import { Outlet, Navigate } from 'react-router-dom';
// o que é o Outlet tudo que tiver disponivel como Rota!
import { useAuth } from '../context/AuthContext';

export const PrivateRoutes = () => {
  const { user } = useAuth();

  console.log(user);

  return user ? <Outlet /> : <Navigate to="/signIn" />;
};
