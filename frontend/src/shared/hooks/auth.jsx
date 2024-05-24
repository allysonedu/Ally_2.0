import { createContext, useCallback, useState, useContext } from 'react'
import { environment } from '../environments'
import { login } from '../../api/ally-list-api'

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const appData = JSON.parse(localStorage.getItem(environment.APP_NAME))

    if (appData) {
      return { user: appData.user, token: appData.token }
    }

    return {}
  })

  const signIn = useCallback(async (email, password) => {
    const result = await login({ email, password })

    const { user, token } = result

    localStorage.setItem(environment.APP_NAME, JSON.stringify({ user, token }))
    setData({ user, token })
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }
