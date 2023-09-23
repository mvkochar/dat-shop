import React from 'react'
import './Product.css'

const Product = () => {
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
                        <div className='d-f align-center' style={{gap: "20px"}}>
                            <button className='main-actions-bye'>Купити</button>
                            <button className="favourite-btn"><img src="images/heart1.png" alt="heart1" /></button>
                            <div className="info-action-wr">
                                <div className="info-action-count">1</div>
                                <div className="info-action-content"><img src="images/comparison.png" alt="comparison" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Product