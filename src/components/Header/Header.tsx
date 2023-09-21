import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1110,
    bgcolor: '#E5E5E5',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

type HeaderProps = {
    productCount: number
}

const Header = ({ productCount }: HeaderProps) => {
    const [dropMenu, setDropMenu] = React.useState(false)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                            <Link to="about">Про нас</Link>
                            <button className='drop-menu-btn' onClick={handleDropMenu}>
                                <img src={dropMenu ? "images/arrow-up.png" : "images/arrow-down.png"} alt="arrow-down" />
                            </button>
                        </li>
                        <li className="nav-list-item"><Link to="catalog">Каталог продукції </Link></li>
                        <li className="nav-list-item"><Link to="delivery">Оплата і доставка</Link></li>
                        <li className="nav-list-item"><Link to="change">Повернення товару</Link></li>
                        <li className="nav-list-item"><Link to="news">Новини</Link></li>
                        <li className="nav-list-item"><Link to="contacts">Контакти</Link></li>
                    </ul>
                </nav>
                <button className='header-login-btn' onClick={handleOpen}>Вхід | Реестрація</button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className='catalog-breadcrumb d-f align-center'>
                            <div className="catalog-bredcumb-item">Головна</div>
                            <div><img src="images/point.png" alt="point" /></div>
                            <div className="catalog-bredcumb-item">Авторизація</div>
                            <div><img src="images/point.png" alt="point" /></div>
                            <div className="catalog-bredcumb-item bredcumb-item__active">Реєстрація</div>
                        </div>
                        <div className="reg-caption d-f align-center">
                            <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
                            <h3 className="reg-title">Реєстрація</h3>
                            <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
                        </div>
                        <p className="reg-desc">
                            Увійдіть, щоб використовувати всі можливості особистого кабінету: відстеження замовлень,
                            налаштування передплати, зв'язки з соціальними мережами та інші. Ми ніколи і за жодних умов
                            не розголошуємо особисті дані клієнтів. Контактна інформація буде використана тільки для
                            оформлення замовлень та зручнішої роботи з сайтом
                        </p>
                        <form action="" className="reg-fm d-f">
                            <div className="input-bl d-f">
                                <input type="text" name='clientName' placeholder="Ім'я" />
                                <input type="text" name='lastName' placeholder='Прізвище' />
                            </div>
                            <div className="input-bl d-f">
                                <input type="tel" name="phone" placeholder='Телефон' />
                                <input type="email" name="email" placeholder='E-mail' />
                            </div>
                            <input type="password" name="password" placeholder='Пароль' />
                            <input type="password" name="repeatPassword" placeholder='Підтвердити пароль' />
                            <div className="check-bl d-f">
                                <input type="checkbox" name="agree" id="agree" />
                                <label htmlFor="agree">я згоден на обробку і захист <span>персональних даних</span></label>
                            </div>
                            <button onClick={handleClose}>Зареєструватися</button>
                        </form>
                    </Box>
                </Modal>
            </div>
            <ul className={dropMenu ? "drop-menu" : "d-n"} >
                <li className="drop-menu-item"><Link to="team" onClick={() => setDropMenu(false)}>Наша команада</Link></li>
                <li className="drop-menu-item"><Link to="partners" onClick={() => setDropMenu(false)}>Партнери</Link></li>
                <li className="drop-menu-item"><Link to="contract" onClick={() => setDropMenu(false)}>Договір</Link></li>
            </ul>
            <div className="header-info d-f jc-sb align-center">
                <div> <Link to="/"><img src="images/logo.png" alt="logo" /></Link> </div>
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
                        <div className="info-action-count">{productCount}</div>
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