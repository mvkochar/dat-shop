import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Catalog from '../../pages/Catalog'
import Delivery from '../../pages/Delivery'

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
    </Routes>
  )
}

export default Main