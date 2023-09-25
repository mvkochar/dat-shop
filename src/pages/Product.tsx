import React from 'react'
import './Product.css'
import ProductCart from '../components/ProductCart/ProductCart'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';

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
    paddingLeft: "95px",
    paddingRight: "95px"

};

type ProductProps = {
    handleProductCount: () => void
}

const Product = ({ handleProductCount }: ProductProps) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [shoppingCount, setShoppingCount] = React.useState(1);
    const decrementCount = () => {
        setShoppingCount((prevState) => {
            return (
                prevState - 1
            )
        })
    }

    const incrementCount = () => {
        setShoppingCount((prevState) => {
            return (
                prevState + 1
            )
        })
    }

    return (
        <main>
            <div className='catalog-breadcrumb d-f align-center'>
                <div className="catalog-bredcumb-item">Головна</div>
                <div><img src="images/point.png" alt="point" /></div>
                <div className="catalog-bredcumb-item">Каталог</div>
                <div><img src="images/point.png" alt="point" /></div>
                <div className="catalog-bredcumb-item">Засоби захисту ролслин</div>
                <div><img src="images/point.png" alt="point" /></div>
                <div className="catalog-bredcumb-item">Гербіциди</div>
                <div><img src="images/point.png" alt="point" /></div>
                <div className="catalog-bredcumb-item bredcumb-item__active">Комманд</div>
            </div>
            <div className="product-main d-f align-center">
                <div>
                    <div className="product-images-sl d-f align-center">
                        <div><img src="images/arrow-left2.png" alt="arrow-left" /></div>
                        <div><img src="images/Products/product1.png" alt="product" /></div>
                        <div><img src="images/arrow-right3.png" alt="arrow-left" /></div>
                    </div>
                    <div className="images-sl-pages d-f">
                        <div className="sl-pages-item"><img src="images/Products/product-min1.png" alt="product-min" /></div>
                        <div className="sl-pages-item"><img src="images/Products/product-min1.png" alt="product-min" /></div>
                        <div className="sl-pages-item"><img src="images/Products/product-min1.png" alt="product-min" /></div>
                    </div>
                </div>
                <div>
                    <div className="product-caption d-f align-center">
                        <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
                        <h3 className="product-title">Гербіцид Комманд<sup>&#174;</sup>, ФМС УКРАЇНА</h3>
                    </div>
                    <div className="d-f jc-sb">
                        <div className="product-exist">В наявності</div>
                        <div className="product-price">1 619,03 грн./л</div>
                    </div>
                    <div className="product-main-info d-f">
                        <div className="main-info-item">
                            <div className="info-item-title">Виробник</div>
                            <div className="info-item-subtitle info-item-logo">ФМС Украина</div>
                            <div className="info-item-title" style={{ marginTop: "20px" }}>Оплата</div>
                            <div className="info-item-payments d-f">
                                <div><img src="images/payment1.png" alt="payment1" /></div>
                                <div><img src="images/payment2.png" alt="payment2" /></div>
                                <div><img src="images/payment3.png" alt="payment3" /></div>
                            </div>
                        </div>
                        <div className="main-info-item">
                            <div className="info-item-title">Доставка</div>
                            <div className="info-item-subtitle">Завтра відповідно до тарифів перевізника</div>
                            <button className='call-btn'>Замовити дзвінок</button>
                        </div>
                    </div>
                    <div className="product-main-actions d-f jc-sb">
                        <div>
                            <div className="product-total-price">7814,63 грн</div>
                            <div className="product-total-desc">Ціна за 5 л</div>
                        </div>
                        <div className='d-f align-center' style={{ gap: "20px" }}>
                            <button className='main-actions-bye' onClick={handleOpen}>Купити</button>

                            <button className="favourite-btn"><img src="images/heart1.png" alt="heart1" /></button>
                            <div className="info-action-wr">
                                <div className="info-action-count">1</div>
                                <div className="info-action-content"><img src="images/comparison.png" alt="comparison" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="reg-caption d-f align-center">
                        <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
                        <h3 className="reg-title">Кошик</h3>
                        <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
                    </div>
                    <div className="shopping-main">
                        <div className="shopping-product-title">Гербіцид Комманд<sup>&#174;</sup>, ФМС УКРАЇНА</div>
                        <div className="shopping-product-info d-f jc-sb">
                            <div className='d-f' style={{ gap: "30px" }}>
                                <div className="shopping-product-img"><img src="images/Products/product-min2.png" alt="product-min" /></div>
                                <div>
                                    <div>
                                        <div className="shopping-product-price">7814,63 грн</div>
                                        <div className="product-price-desc">Ціна за 5 л</div>
                                    </div>
                                    <div className="shopping-product-producer">
                                        <div className="product-producer-title">Виробник</div>
                                        <div className="product-producer-name">ФМС Украина</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <select className='shopping-product-capacity' name="capacity">
                                    <option value="canister">Каністра 5 л</option>
                                </select>
                                <div className="products-count-wr d-f align-center">
                                    <div className="product-count-title">Кількість</div>
                                    <button
                                        className={shoppingCount === 1 ? 'products-count-btn count-btn__disabled' : 'products-count-btn'}
                                        onClick={decrementCount}
                                        disabled={shoppingCount === 1 ? true : false}
                                    >
                                        -
                                    </button>
                                    <div className="products-count-num">{shoppingCount}</div>
                                    <button className='products-count-btn' onClick={incrementCount}>
                                        <img src="images/plus.png" alt="plus" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shopping-actions d-f jc-sb">
                        <Link to='/catalog' className='shopping-continue-btn'>Продовжити покупки</Link>
                        <Link to='/order' className="shopping-order-btn" >Оформити заказ</Link>
                    </div>

                </Box>
            </Modal>
            <div className="product-about">
                <div className="product-about-tabs d-f">
                    <button className='about-tab-btn tabs-btn__active'>Опис</button>
                    <button className='about-tab-btn'>Відгуки</button>
                </div>
                <div className="product-about-content">
                    <div className="about-content-bl">
                        <div className="about-content-title">Генерал на полі</div>
                        <p className="about-content-desc">
                            Генерал на полі. Досходовий гербіцид для боротьби з однорічними дводольними та
                            деякими злаковими бур’янами в посівах ріпаку та інших культур.
                        </p>
                        <ul className="about-content-list d-f" style={{ listStyleType: "none" }}>
                            <li><span>Діюча речовина:</span> Кломазон, 480 г/л</li>
                            <li><span>Препаративна форма:</span> Концентрат емульсії</li>
                            <li><span>Норма використання:</span>  0,2-0,6 л/га</li>
                            <li><span>Клас токсичності:</span> 2</li>
                            <li><span>Термін зберігання:</span> 2 роки</li>
                        </ul>
                    </div>
                    <div className="about-content-bl" style={{ marginTop: "23px" }}>
                        <div className="about-content-title">Характеристики</div>
                        <p className="about-content-desc">
                            Системний препарат потрапляє до рослини через гіпокотиль (підсім´ядольне колінце) та
                            кореневу систему і рухається по ксилемі до листків;
                        </p>
                        <ul className="about-content-list d-f" style={{ marginLeft: "31px", gap: 0, marginTop: 0 }}>
                            <li>
                                Проникаючи в рослину, припиняє процес утворення хлорофілу і каротину, тим самим зупиняє процес фотосинтезу;
                            </li>
                            <li>
                                Знищує бур’яни та створює умови озимому ріпаку для доброго росту і розвитку в осінній період,
                                усуваючи конкуренцію рослин за світло, вологу та поживні речовини на самих ранніх етапах органогенезу;
                            </li>
                            <li>Добре зв´язується у грунті та слабо промивається;</li>
                            <li>Для комплексного захисту ріпаку зазвичай;</li>
                            <li>Використовується у бакових сумішах із д.р. метазахлор та пропізохлор;</li>
                            <li>
                                В країнах Східної Європи (Чехія, Словаччина, Польща) використання Комманд® на посівах ріпаку
                                є обов’язковим елементом в технології його вирощування;
                            </li>
                            <li>
                                Широко використовується більше, ніж в 100 країнах світу на посівах ріпаку, сої, тютюну, перцю,
                                моркви, картоплі, баштанних, бавовни та інших культур.
                            </li>
                        </ul>
                    </div>
                    <div className="about-content-bl" style={{ marginTop: "4px" }}>
                        <div className="about-content-title">Рекомендації</div>
                        <ul className="about-content-list d-f" style={{ marginLeft: "31px", gap: 0, marginTop: "11px" }}>
                            <li>
                                Для досягнення максимального ефекту потрібен якісний обробіток ґрунту: відсутність грудок,
                                вирівняна поверхня поля, відсутність рослинних решток;
                            </li>
                            <li>Обприскування ґрунту проводиться впродовж двох днів, а найкраще відразу ж після посіву;</li>
                            <li>
                                За недостачі ґрунтової вологи після обприскування рекомендується провести коткування ґрунту
                                кільчасто- шпоровими котками;
                            </li>
                            <li>Норма витрати залежить від вмісту гумусу в ґрунті, на малогумусних ґрунтах її можна дещо знизити;</li>
                            <li>
                                Може виникнути побіління першої пари листочків ріпаку, проте в подальшому воно зникає,
                                а рослини мають більш розвинену кореневу систему, краще витримують низькі температури;
                            </li>
                            <li>
                                За потреби пересіву через 30-60 днів після обробки ріпак та сою можна сіяти після поверхневого
                                обробітку ґрунту на глибину 8-10 см, для всіх інших культур рекомендується провести глибоку оранку;
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="home-promotions">
                <div className="home-promotions-caption d-f align-center">
                    <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
                    <h3 className="home-promotions-title">Вам також сподобається</h3>
                    <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
                </div>
                <div className="home-new-box d-f align-center">
                    <div><img src="images/slide-control1.png" alt="slide-contro1" /></div>
                    <div className="home-new-content d-f">
                        <ProductCart
                            image='images/new-product1.png'
                            title='Петунія Софістика F1'
                            price={20}
                            handleProductCount={handleProductCount}
                        />
                        <ProductCart
                            image='images/new-product2.png'
                            title='Скор 250 ЕС к.э.'
                            price={589}
                            handleProductCount={handleProductCount}
                        />
                        <ProductCart
                            image='images/new-product3.png'
                            title='Скор 250 ЕС к.э.'
                            price={200}
                            handleProductCount={handleProductCount}
                        />
                        <ProductCart
                            image='images/new-product4.png'
                            title='Петунія Софістика F1'
                            price={20}
                            handleProductCount={handleProductCount}
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
        </main>
    )
}

export default Product