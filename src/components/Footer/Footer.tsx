import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="d-f jc-sb">
        <div>
          <div> <Link to="/"><img src="images/footer-logo.png" alt="footer-logo" /></Link> </div>
          <p className="footer-desc">Пропонуємо покупцям широкий вибір насіння овочів</p>
        </div>
        <div>
          <div className="footer-bl-title">Інформація</div>
          <ul className="footer-list">
            <li className="footer-list-item"><Link to="about">Про компанію</Link></li>
            <li className="footer-list-item"><Link to="delivery">Оплата і доставка</Link></li>
            <li className="footer-list-item"><Link to="partners">Партнери</Link></li>
            <li className="footer-list-item"><Link to="kodex">Корпоративний кодекс</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-bl-title">Товари</div>
          <ul className="footer-list">
            <li className="footer-list-item"><Link to="catalog">Каталог продукції</Link></li>
            <li className="footer-list-item"><a href="">Засоби захисту рослин</a></li>
            <li className="footer-list-item"><a href="">Насіння</a></li>
            <li className="footer-list-item"><a href="">Добрива</a></li>
            <li className="footer-list-item"><a href="">Агроному в поміч</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-bl-title" style={{marginBottom: "26px"}}>Контакти</div>
          <div className="header-phone-wr d-f">
            <button><img src="images/phone.png" alt="phone" /></button>
            <div>
              <div className="header-phone-title">+38 (067) 115 00 58</div>
              <div className="header-phone-note">Замовити зворотній зв’язок</div>
            </div>
          </div>
          <div className="header-phone-wr d-f align-center" style={{marginTop: "21px"}}>
            <button><img src="images/email.png" alt="email" /></button>
            <div className="header-phone-title">DAT@gmail.com</div>
          </div>
        </div>
      </div>
      <div className="footer-rights">&copy; 2022 DAT</div>
    </footer>
  )
}

export default Footer