import { useState } from 'react'
import '../pagestyle/login.css'
import { UseAuth } from '../context/useAuth'

const LoginComponent = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const {user_login} = UseAuth();

  const handlelogin = (e) => {
    e.preventDefault() 
    user_login(email, password)
  }

  return (
    <form onSubmit={handlelogin}>
      <input
        type="email"
        placeholder="enter the email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />

      <input
        type="password"
        placeholder="enter the password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  )
}

export default LoginComponent
