import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/about'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

export default function App() {
  return(
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/about' element={<About />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Project' element={<Projects />} />
        <Route path='/Signin' element={<Signin />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
      </BrowserRouter>
  )
}
