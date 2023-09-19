import React from 'react'
import './News.css'

const News = () => {
    return (
        <main>
            <div className='catalog-breadcrumb d-f align-center'>
                <div className="catalog-bredcumb-item">Головна</div>
                <div><img src="images/point.png" alt="point" /></div>
                <div className="catalog-bredcumb-item">Новини</div>
            </div>
            <div className="news-caption d-f align-center">
                <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
                <h3 className="news-title">Новини</h3>
                <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
            </div>
            <div className="news-box d-f">
                <div className="news-item">
                    <div className='news-item-main'>
                        <div className="news-item-date">20.01.2022</div>
                    </div>
                    <div className="news-item-title">Доставка «Укрпошта Експрес»</div>
                    <p className="news-item-desc">
                        Для того, щоб можна було розглянути питання про ремонт або компенсацію, або обмін,
                        або повернення товару необхідно, щоб були виконані наступні умови:
                    </p>
                    <button className='news-item-btn'>Докладніше</button>
                </div>
                <div className="news-item">
                    <div className='news-item-main'>
                        <div className="news-item-date">20.01.2022</div>
                    </div>
                    <div className="news-item-title">Доставка «Укрпошта Експрес»</div>
                    <p className="news-item-desc">
                        Для того, щоб можна було розглянути питання про ремонт або компенсацію, або обмін,
                        або повернення товару необхідно, щоб були виконані наступні умови:
                    </p>
                    <button className='news-item-btn'>Докладніше</button>
                </div>
                <div className="news-item">
                    <div className='news-item-main'>
                        <div className="news-item-date">20.01.2022</div>
                    </div>
                    <div className="news-item-title">Доставка «Укрпошта Експрес»</div>
                    <p className="news-item-desc">
                        Для того, щоб можна було розглянути питання про ремонт або компенсацію, або обмін,
                        або повернення товару необхідно, щоб були виконані наступні умови:
                    </p>
                    <button className='news-item-btn'>Докладніше</button>
                </div>
                <div className="news-item">
                    <div className='news-item-main'>
                        <div className="news-item-date">20.01.2022</div>
                    </div>
                    <div className="news-item-title">Доставка «Укрпошта Експрес»</div>
                    <p className="news-item-desc">
                        Для того, щоб можна було розглянути питання про ремонт або компенсацію, або обмін,
                        або повернення товару необхідно, щоб були виконані наступні умови:
                    </p>
                    <button className='news-item-btn'>Докладніше</button>
                </div>
                <div className="news-item">
                    <div className='news-item-main'>
                        <div className="news-item-date">20.01.2022</div>
                    </div>
                    <div className="news-item-title">Доставка «Укрпошта Експрес»</div>
                    <p className="news-item-desc">
                        Для того, щоб можна було розглянути питання про ремонт або компенсацію, або обмін,
                        або повернення товару необхідно, щоб були виконані наступні умови:
                    </p>
                    <button className='news-item-btn'>Докладніше</button>
                </div>
                <div className="news-item">
                    <div className='news-item-main'>
                        <div className="news-item-date">20.01.2022</div>
                    </div>
                    <div className="news-item-title">Доставка «Укрпошта Експрес»</div>
                    <p className="news-item-desc">
                        Для того, щоб можна було розглянути питання про ремонт або компенсацію, або обмін,
                        або повернення товару необхідно, щоб були виконані наступні умови:
                    </p>
                    <button className='news-item-btn'>Докладніше</button>
                </div>
            </div>
            <div className="catalog-pages d-f">
                <button className='catalog-pages-btn'><img src="images/arrow-left.png" alt="arrow-left" /></button>
                <div className="catalog-pages-btn pages-btn__active">1</div>
                <div className="catalog-pages-btn">2</div>
                <div className="catalog-pages-btn">...</div>
                <div className="catalog-pages-btn">6</div>
                <div className="catalog-pages-btn">7</div>
                <button className='catalog-pages-btn'><img src="images/arrow-right.png" alt="arrow-right" /></button>
            </div>
        </main>
    )
}

export default News