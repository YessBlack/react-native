import { useEffect } from 'react'
import { useAuthStore } from '../store/Auth.store'

export const Login = () => {
  const authStatus = useAuthStore(state => state.status)
  const user = useAuthStore(state => state.user)
  const login = useAuthStore(state => state.login)
  const logout = useAuthStore(state => state.logout)

  useEffect(() => {
    setTimeout(() => {
      logout()
    }, 2000)
  }, [])

  if (authStatus === 'checking') return <h3>Loading...</h3>

  return (
    <div>
      <h3>Login Page</h3>
      { 
          authStatus === 'authenticated' 
              ?  <div>Autenticado como {JSON.stringify(user, null, 2)}</div>
              : <div>No autenticado</div>
      }

      {
          authStatus === 'unauthenticated' 
              ? <button onClick={() => login('jhonDoe@gmail.com', '123')}>Login</button>
              : <button onClick={() => logout()}>Logout</button>
      }
    </div>
  )
}
