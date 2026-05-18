import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Add from './components/Add'
import Modify from './components/Modify'
import Delete from './components/Delete'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/modify' element={<Modify/>}/>
      <Route path='/delete' element={<Delete/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App