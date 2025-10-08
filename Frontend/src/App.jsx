import React from 'react'
import { Routes, Route } from "react-router";
import Home from './pages/Home';
import SignUp from './pages/SignUp.JSX';
import Login from './pages/Login';
import getCurrentUser from './customHooks/getCurrentUser'
import { ToastContainer } from 'react-toastify';
export const serverUrl="http://localhost:8000"
const App = () => {
  getCurrentUser()
  return (
    <>
      <div>
         <ToastContainer/>
           <Routes>
             <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/login' element={<Login/>}/>
           </Routes>
      </div>
    </>
  )
}

export default App