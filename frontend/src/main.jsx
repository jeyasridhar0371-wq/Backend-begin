import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from './Signup.jsx'
import Signin from './Signin.jsx'
import Dashbord from './Dashbord.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/dashbord' element={<Dashbord/>} ></Route>
    </Routes>
  </BrowserRouter>
)
