import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Contact from './components/Contact';
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';


const App = () => {
  return (<>

    <Navbar />

    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/about' element={<About></About>}/>
      <Route path='/contact' element={<Contact></Contact>}/>
      <Route path='/login' element={<Login></Login>}/>
      <Route path='/signup' element={<Signup></Signup>}/>
      <Route path='/logout' element={<Logout></Logout>}/>
      <Route path='*' element={<h1>page not found</h1>}/>

    </Routes>
  </>
  )
}

export default App;