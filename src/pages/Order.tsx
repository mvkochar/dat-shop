import React from 'react'
import './Order.css'
import { Link } from 'react-router-dom'

const Order = () => {
  return (
    <main>
      <div className='catalog-breadcrumb d-f align-center'>
        <div className="catalog-bredcumb-item">Головна</div>
        <div><img src="images/point.png" alt="point" /></div>
        <div className="catalog-bredcumb-item">Корзина</div>
        <div><img src="images/point.png" alt="point" /></div>
        <div className="catalog-bredcumb-item bredcumb-item__active">Оформлення заказу</div>
      </div>
      <div className="order-caption d-f align-center">
        <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
        <h3 className="order-title">Оформлення заказу</h3>
        <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
      </div>
      <div className="order-main d-f jc-sb">
        <form action="" className='order-main-fm'>
          <div className="main-fm-bl">
            <h4 className='fm-bl-title'>Ваші контакти</h4>
            <div className="input-bl d-f">
              <input type="text" name='fName' placeholder="Ім'я" />
              <input type="text" name='lName' placeholder="Прізвище" />
            </div>
            <div className="input-bl d-f">
              <input type="tel" name="phone" placeholder='Телефон' />
              <input type="email" name="email" placeholder='E-mail' />
            </div>
            <textarea name="comments" placeholder='Коментарій'></textarea>
          </div>
          <div className="main-fm-bl">
            <h4 className='fm-bl-title'>Доставка</h4>
            <div className="input-bl d-f">
              <select name="region">
                <option value="">Область</option>
                <option value="kharkivRegion">Харківська</option>
                <option value="kyivRegion">Kиївська</option>
              </select>
              <select name="city">
                <option value="">Місто</option>
                <option value="kharkiv">Харків</option>
                <option value="lviv">Львів</option>
              </select>
            </div>
            <div className="input-bl d-f">
              <select name="post">
                <option value="">Відділення</option>
              </select>
              <input type="text" name='code' placeholder='Поштовий індекс' />
            </div>
          </div>
          <div className="main-fm-bl">
            <h4 className='fm-bl-title'>Оплата</h4>
            <div className="radio-bl d-f align-center">
              <input type="radio" name="payment" id="cash"/>
              <label htmlFor="cash">Готівка</label>
            </div>
            <div className="radio-bl d-f align-center">
              <input type="radio" name="payment" id="card"/>
              <label htmlFor="card">Оплата картою</label>
            </div>
            <div className="radio-bl d-f align-center">
              <input type="radio" name="payment" id="online"/>
              <label htmlFor="online">Оплата картою онлайн</label>
            </div>

          </div>
        </form>
        <div className="order-main-info">
          <h4 className="order-main-title">Товари у кошику</h4>
          <div className="order-product-info d-f align-center">
            <div className="order-product-img"><img src="images/Products/product-min3.png" alt="product-min" /></div>
            <div className='d-f' style={{gap: "26px"}}>
               <div>
                  <div className="order-product-title">Гербіцид Комманд<sup>&#174;</sup>, ФМС УКРАЇНА</div>
                  <div className="d-f" style={{gap: "20px"}}>
                    <div className="order-product-price">7814,63 грн</div>
                    <div className="order-product-count">x1</div>
                  </div>
               </div>
               <button className='order-product-remove'><img src="images/remove.png" alt="remove"/></button>
            </div>
          </div>
          <div className="order-product-info d-f align-center">
            <div className="order-product-img"><img src="images/Products/product-min3.png" alt="product-min" /></div>
            <div className='d-f' style={{gap: "26px"}}>
               <div>
                  <div className="order-product-title">Гербіцид Комманд<sup>&#174;</sup>, ФМС УКРАЇНА</div>
                  <div className="d-f" style={{gap: "20px"}}>
                    <div className="order-product-price">7814,63 грн</div>
                    <div className="order-product-count">x1</div>
                  </div>
               </div>
               <button className='order-product-remove'><img src="images/remove.png" alt="remove"/></button>
            </div>
          </div>
          <div className="order-total-info d-f jc-sb">
              <div>Разом: <span>2 товари</span></div>
              <div>На суму: <span>15 629,26</span></div>
          </div>
          <Link to='/thanks' className='order-submit'>Підтвердити заказ</Link>
        </div>

      </div>
    </main>
  )
}

export default Order