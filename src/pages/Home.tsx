import React from 'react'
import './Home.css'
import ProductCart from '../components/ProductCart/ProductCart'

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
      <div className="home-info d-f jc-sb align-center">
        <div><img src="images/home-info.png" alt="home-info" /></div>
        <div>
          <h3 className="home-info-title">Про нас</h3>
          <p className="home-info-text">
            <span>«Компанія ТОВ “ДАМАР АГРОТРЕЙД”</span> — молода команда, яка з’явилась на аграрному ринку у 2020 році.
            Ми не боїмось труднощів і викликів. Тому навіть складний ковідний період, світова пандемія не стали на заваді успішному старту.
          </p>
          <p className="home-info-text">
            Отже, <span>ми — сміливі, ми — драйвові</span>, ми — ті, що розвивають рослинництво та допомагають
            ставати успішними тисячам вітчизняних аграріїв.
          </p>
          <p className="home-info-text">
            <span>Бачення:</span> компанія ТОВ “ДАМАР АГРОТРЕЙД” тримає курс на підвищення престижності, довіри до засобів захисту
            рослин made in UA. Прагнемо, аби в кожному регіоні України наш споживач мав доступ до якісної продукції
            та консалтингу від фахівців команди.
          </p>
          <p className="home-info-text">
            <span>Місія:</span> усе продуктове портфоліо, консультативні послуги ТОВ “ДАМАР АГРОТРЕЙД” направлені
            на підвищення рентабельності рослинництва в мінливих кліматичних умовах України. Також ставимо собі завдання
            підвищувати обізнаність клієнтів щодо сучасних методів ведення рослинництва...
          </p>
          <button className="home-info-btn">Докладніше</button>
        </div>
      </div>
      <div className="home-new">
        <div className="home-new-caption d-f align-center">
          <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
          <h3 className="home-new-title">Новинки</h3>
          <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
        </div>
        <div className="home-new-box d-f align-center">
          <div><img src="images/slide-control1.png" alt="slide-contro1" /></div>
          <div className="home-new-content d-f">
              <ProductCart
                image='images/new-product1.png'
                title='Петунія Софістика F1'
                price={20}
              />
               <ProductCart
                image='images/new-product2.png'
                title='Скор 250 ЕС к.э.'
                price={589}
              />
              <ProductCart
                image='images/new-product3.png'
                title='Скор 250 ЕС к.э.'
                price={200}
              />
              <ProductCart
                image='images/new-product4.png'
                title='Петунія Софістика F1'
                price={20}
              />
          </div>
          <div><img src="images/slide-control2.png" alt="slide-control2"/></div>
        </div>
      </div>
    </main>
  )
}

export default Home