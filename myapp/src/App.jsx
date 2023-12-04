import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Nav from './components/nav'
import Login from './components/login';
import Users from './components/users';
import Customers from './components/customers';
import Counter from './components/counter';
import CounterClassComp from './components/counterClassComp';
import { Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/register';
import Logout from './components/logout';
import Home from './components/home';
import PageNotFound from './components/pageNotFound';

function App() {
  return (
    <>

      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path='/login' element={<Login />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/register' element={<Register />} />
        <Route path='/logout' element={<Logout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App