import React from 'react'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Weekleypage from './Weekleypage';
import Hourlypage from './Hourlypage';

function Landing() {

  return (
    <>
     <Header /> 
     <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/weekly' element={<Weekleypage />} />
      <Route path='/hourly' element={<Hourlypage />} />
     </Routes>
    </>
  )
  
}

export default Landing ;
