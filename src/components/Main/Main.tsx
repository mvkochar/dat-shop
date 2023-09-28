import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Catalog from '../../pages/Catalog'
import Delivery from '../../pages/Delivery'
import About from '../../pages/About'
import Team from '../../pages/Team'
import Partners from '../../pages/Partners'
import Contract from '../../pages/Contract'
import Change from '../../pages/Change'
import News from '../../pages/News'
import Kodex from '../../pages/Kodex'
import Contacts from '../../pages/Contacts'
import Product from '../../pages/Product'
import Order from '../../pages/Order'
import Thanks from '../../pages/Thanks'
import Cabinet from '../../pages/Cabinet'

type MainProps = {
  handleProductCount: () => void
}

const Main = ({ handleProductCount }: MainProps) => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home handleProductCount={handleProductCount} />}
      />
      <Route
        path='catalog'
        element={<Catalog handleProductCount={handleProductCount} />}
      />
      <Route
        path='delivery'
        element={<Delivery />}
      />
      <Route
        path='about'
        element={<About />}
      />
      <Route
        path='team'
        element={<Team />}
      />
      <Route
        path='partners'
        element={<Partners />}
      />
      <Route
        path='contract'
        element={<Contract />}
      />
      <Route
        path='change'
        element={<Change />}
      />
      <Route
        path='news'
        element={<News />}
      />
      <Route
        path='kodex'
        element={<Kodex />}
      />
      <Route
        path='contacts'
        element={<Contacts />}
      />
      <Route
        path='product'
        element={<Product handleProductCount={handleProductCount} />}
      />
      <Route
        path='order'
        element={<Order/>}
      />
      <Route
        path='thanks'
        element={<Thanks/>}
      />
      <Route
        path='cabinet'
        element={<Cabinet/>}
      />

    </Routes>
  )
}

export default Main