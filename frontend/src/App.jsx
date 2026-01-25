import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Login from './routers/login'
import Home from './routers/home'
function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login /> } />
        <Route path='/home' element={<Home /> } />

         
      </Routes>
    </Router>

  )
}

export default App
