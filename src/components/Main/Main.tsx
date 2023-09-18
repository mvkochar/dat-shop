import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Catalog from '../../pages/Catalog'
import Delivery from '../../pages/Delivery'
import About from '../../pages/About'
import Team from '../../pages/Team'
import Partners from '../../pages/Partners'
import Contract from '../../pages/Contract'

const Main = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='catalog'
        element={<Catalog />}
      />
      <Route
        path='delivery'
        element={<Delivery/>}
      />
      <Route
        path='about'
        element={<About/>}
      />
      <Route
        path='team'
        element={<Team/>}
      />
      <Route
        path='partners'
        element={<Partners/>}
      />
      <Route
        path='contract'
        element={<Contract/>}
      />
    </Routes>
  )
}

export default Main