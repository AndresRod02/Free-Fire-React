import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProtectedRoutes from './components/ProtectedRoutes'
import Decision from './pages/Decision'
import Diamonds from './pages/Diamonds'
import Skins from './pages/Skins'
function App() {
  return (
    <HashRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/decision' element={<Decision/>}/>
          <Route path='/diamonds' element={<Diamonds/>}/>
          <Route path='/skins' element={<Skins/>}/>
        </Route>
      </Routes>
      </div>
    </HashRouter>
  )
}

export default App
