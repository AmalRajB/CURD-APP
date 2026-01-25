import { useState } from 'react'
import '../pagestyle/login.css'
import { login } from '../api_endpoints/api'

const LoginComponent = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const handlelogin = (e) => {
    e.preventDefault() 
    login(email, password)
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
