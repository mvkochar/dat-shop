import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Catalog from '../../pages/Catalog'

const Main = () => {
  return (
    <Routes>
        <Route
            path='/'
            element={<Home/>}
        />
        <Route
          path='catalog'
          element={<Catalog/>}
        />
    </Routes>
  )
}

export default Main