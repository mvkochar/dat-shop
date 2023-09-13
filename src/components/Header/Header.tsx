import React from 'react'
import './Header.css'

const Header = () => {
    const [dropMenu, setDropMenu] = React.useState(false)

    const handleDropMenu = () => {
        setDropMenu((prevState) => {
            return (
                !prevState
            )
        })
    }

    return (
        <div className='header'>
            <div className="header-bar d-f jc-sb align-center">
                <nav>
                    <ul className="header-nav-list d-f">
                        <li className="nav-list-item drop-menu-wr d-f">
                            <a href="">Про нас</a>
                            <button className='drop-menu-btn' onClick={handleDropMenu}>
                                <img src={dropMenu ? "images/arrow-up.png" : "images/arrow-down.png"} alt="arrow-down" />
                            </button>
                        </li>
                        <li className="nav-list-item"><a href="">Каталог продукції </a></li>
                        <li className="nav-list-item"><a href=""> Оплата і доставка</a></li>
                        <li className="nav-list-item"><a href="">Партнери</a></li>
                        <li className="nav-list-item"><a href="">Новини</a></li>
                        <li className="nav-list-item"><a href="">Контакти</a></li>
                    </ul>
                </nav>
                <button className='header-login-btn'>Вхід | Реестрація</button>
            </div>
            <ul className={dropMenu ?  "drop-menu" : "d-n"} >
                <li className="drop-menu-item"><a href="">Наша команада</a></li>
                <li className="drop-menu-item"><a href="">Партнери</a></li>
                <li className="drop-menu-item"><a href="">Договір</a></li>
            </ul>
            <div className="header-info d-f jc-sb align-center">
                <div><img src="images/logo.png" alt="logo" /></div>
                <form action="" className="header-info-fm">
                    <input type="text" name='searchQuery' placeholder='Пошук' />
                    <button><img src="images/search.png" alt="search" /></button>
                </form>
                <div className="header-phone-wr d-f">
                    <button><img src="images/phone.png" alt="phone" /></button>
                    <div>
                        <div className="header-phone-title">+38 (067) 115 00 58</div>
                        <div className="header-phone-note">Замовити зворотній зв’язок</div>
                    </div>
                </div>
                <div className='header-info-actions d-f'>
                    <button className="favourite-btn"><img src="images/heart.png" alt="heart" /></button>
                    <div className="info-action-wr">
                        <div className="info-action-count">1</div>
                        <div className="info-action-content"><img src="images/comparison.png" alt="comparison" /></div>
                    </div>
                    <div className="info-action-wr">
                        <div className="info-action-count">1</div>
                        <div className="info-action-content"><img src="images/cart.png" alt="cart" /></div>
                    </div>
                </div>

            </div>
            <div className="header-categories d-f jc-sb">
                <button className='header-categories-btn'>Насіння</button>
                <button className='header-categories-btn'>Засоби захисту<br />рослин</button>
                <button className='header-categories-btn'>Добрива</button>
                <button className='header-categories-btn'>Кормова група</button>
                <button className='header-categories-btn'>Агроному<br />в поміч</button>
            </div>
        </div>
    )
}

export default Header