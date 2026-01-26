import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './routers/login'
import Home from './routers/home'
import { AuthProvider } from './context/useAuth'
import PrivateRoute from './components/private_route'
function App() {


  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={ <PrivateRoute> <Home /> </PrivateRoute> } />
        </Routes>
      </AuthProvider>


    </Router>

  )
}

export default App
