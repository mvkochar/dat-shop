import React from 'react'
import { Link } from 'react-router-dom'
import './Thanks.css' 

const Thanks = () => {
    return (
        <main>
            <div className="thanks-main">
                <div className="thanks-caption d-f align-center">
                    <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
                    <h3 className="thanks-title">Дякуємо за заказ</h3>
                    <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
                </div>
                <p className="thanks-desc">Наш менеджер зв’яжеться з вами скоро та відправить вам заказ</p>
                <div className="thanks-actions d-f">
                    <Link to='/catalog' className='continue-link'>Продовжити покупки</Link>
                    <Link to='/' className='home-link'>Повернутися на головну</Link>
                </div>
            </div>
        </main>
    )
}

export default Thanks