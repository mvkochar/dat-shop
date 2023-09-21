import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

const App = () => {

  const [productCount, setProductCount] = React.useState(0)

  const handleProductCount = () => {
    setProductCount((prevState)=> {
      return (
        prevState + 1
      )
    })
  }

  return (
    <>
      <Header productCount={productCount}/>
      <Main handleProductCount={handleProductCount} />
      <Footer />
    </>
  )
}

export default App
