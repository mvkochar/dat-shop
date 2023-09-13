import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <main>
      <div className="home-main d-f align-center">
        <div>
          <h3 className="home-main-title">Аграрний</h3>
          <h4 className='home-main-subtitle'>інтернет-магазин</h4>
          <p className="home-main-desc">
            Основна сфера діяльності - дистрибуція насіння, засобів захисту рослин, мінеральних макро - та мікродобрив
          </p>
          <button className='home-main-btn'>Про компанію</button>
        </div>
        <div><img src="images/home-main-img.png" alt="home-main-img" /></div>
      </div>
    </main>
  )
}

export default Home