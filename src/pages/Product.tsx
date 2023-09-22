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
            <div className="product-main d-f">
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
                </div>
            </div>
        </main>
    )
}

export default Product