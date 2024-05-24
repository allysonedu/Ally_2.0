import { Routes, Route, Navigate } from 'react-router-dom'

import { SignIn, SignUp, Assisteds, Dashboard } from '../pages'

import { Layout } from '../shared/components'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/Sign-Up" element={<SignUp />} />

      <Route path="*" element={<Navigate to="/" />} />

      <Route
        path="/home"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />

      <Route
        path="/Assisteds"
        element={
          <Layout>
            <Assisteds />
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
