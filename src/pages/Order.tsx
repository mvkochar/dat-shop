import React from 'react'
import './Order.css'

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
            </div>
          </div>
        </form>

      </div>
    </main>
  )
}

export default Order