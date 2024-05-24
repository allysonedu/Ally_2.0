// Rotas de totas as Pages da aplicação!

import { Routes, Route, Navigate } from 'react-router-dom';

import { SignIn, Home, Test } from '../../pages';

import { PrivateRoutes } from './PrivateRoutes';

import { Layout } from '../components';

export const AppRoutes = () => {
  // Layout será apagado depois
  // Só tera acesso a home/PrivateRoutes se tiver cadastrado!
  return (
    <Routes>
      <Route path="/" element={<Test />} />
      <Route path="/signIn" element={<SignIn />} />

      <Route element={<PrivateRoutes />}>
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
