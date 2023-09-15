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
          <div><img src="images/slide-control2.png" alt="slide-control2" /></div>
        </div>
        <div className="home-new-pages d-f">
          <div className="new-pages-item"></div>
          <div className="new-pages-item"></div>
          <div className="pages-item__active"></div>
          <div className="new-pages-item"></div>
          <div className="new-pages-item"></div>
        </div>
      </div>
      <div className="home-promotions">
        <div className="home-promotions-caption d-f align-center">
          <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
          <h3 className="home-promotions-title">Акції</h3>
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
          <div><img src="images/slide-control2.png" alt="slide-control2" /></div>
        </div>
        <div className="home-promotions-pages d-f">
          <div className="promotions-pages-item"></div>
          <div className="promotions-pages-item"></div>
          <div className="pages-item__active"></div>
          <div className="promotions-pages-item"></div>
          <div className="promotions-pages-item"></div>
        </div>
        <button className='home-promotions-btn'>Дивитися усі товари</button>
      </div>
      <div className="home-partners">
        <div className="home-partners-caption d-f align-center">
          <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
          <h3 className="home-partners-title">Партнери</h3>
          <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
        </div>
        <div className="home-partners-box d-f jc-sb">
          <div><img src="images/partner1.png" alt="partner1" /></div>
          <div><img src="images/partner2.png" alt="partner2" /></div>
          <div><img src="images/partner3.png" alt="partner3" /></div>
          <div><img src="images/partner4.png" alt="partner4" /></div>
          <div><img src="images/partner5.png" alt="partner5" /></div>
        </div>
        <div className="home-partners-pages d-f">
          <div className="partners-pages-item"></div>
          <div className="partners-pages-item"></div>
          <div className="pages-item__active"></div>
          <div className="partners-pages-item"></div>
          <div className="partners-pages-item"></div>
        </div>
      </div>
      <div className="home-seeds">
        <div className="home-seeds-caption d-f align-center">
          <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
          <h3 className="home-seeds-title">Семена</h3>
        </div>
        <p className="home-seeds-text">
          Вирощування овочів, квітів на своїй ділянці або просто на балконі - це улюблене заняття багатьох дачників та городників.
          Звичайно, свіжі овочі з власного городу натуральні, смачні та корисні. Але щоб отримати хороший урожай томату або капусти,
          насолоджуватися цвітінням петунії або троянди, важливо не тільки правильно доглядати за рослинами. Все починається
          із вибору посівного матеріалу. І тут постає питання: яке насіння вибрати? Адже вони мають бути якісними, давати гарну схожість.
        </p>
        <p className="home-seeds-text">
          Пропонуємо покупцям широкий вибір насіння овочів. У нас ви можете знайти насіння баклажанів, різних видів
          капусти, бобових та баштанних культур, томату, перцю, огірків, цибулі, салату, часнику, картоплі від вітчизняних
          та зарубіжних виробників.
        </p>
        <p className="home-seeds-text">
          Також ви можете знайти в нашому каталозі насіння квітів: однорічних (петунія, левовий зів, календула і т.д.),
          дворічних (віола, примула, мальва), багаторічних (іберис, анемона, гібіскус, дельфініум, фрезія), цибулинних (тюльпани),
          лілія, ірис, нарциси, кімнатних (гербера, бегонія, кактус, мімоза, пасифлора). Звичайно, це далеко не весь
          список — кожна господиня знайде тут свою улюблену квітку.
        </p>
        <p className="home-seeds-text">
          У широкому асортименті представлені саджанці плодових дерев, троянд, ягідних кущів.
          У нас ви можете купити насіння газонної трави, а також супутні товари: добрива, засоби захисту,
          біопрепарати, садовий інвентар, субстрати, ґрунти, агроволокно, горщики, касети для розсади.
        </p>
      </div>
    </main>
  )
}

export default Home