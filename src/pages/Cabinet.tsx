import React from 'react'
import './Cabinet.css'
import { url } from 'inspector'

const Cabinet = () => {
    const cabinetTitles = ['Мій кабінет', 'Поточні замовлення', 'Особисті дані', 'Змінити пароль', 'Історія замовлень']
    const [cabinetTab, setCabinetTab] = React.useState(0)

    return (
        <main>
            <div className='catalog-breadcrumb d-f align-center'>
                <div className="catalog-bredcumb-item">Головна</div>
                <div><img src="images/point.png" alt="point" /></div>
                <div
                    className={cabinetTab > 0 ? "catalog-bredcumb-item" : "catalog-bredcumb-item bredcumb-item__active"}
                >
                    Особистий кабінет
                </div>
                <div className={cabinetTab > 0 ? "" : "d-n"}><img src="images/point.png" alt="point" /></div>
                <div
                    className={cabinetTab > 0 ? "catalog-bredcumb-item" : "catalog-bredcumb-item bredcumb-item__active"}
                >
                    {cabinetTitles[cabinetTab]}
                </div>
            </div>
            <div className="cabinet-caption d-f align-center">
                <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
                <h3 className="cabinet-title">{cabinetTitles[cabinetTab]}</h3>
                <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
            </div>
            <div className="cabinet-wr d-f">
                <div className="cabinet-tabs">
                    <button
                        className={cabinetTab === 0 ? 'cabinet-tabs-item cabinet-tab__active' : 'cabinet-tabs-item'}
                        style={cabinetTab > 0 ? {background: `url("images/cabinet-tab1-1.png") no-repeat`, backgroundPosition: "19px"}: {}}
                        onClick={() => setCabinetTab(0)}
                    >
                        Мій кабінет
                    </button>
                    <button
                        className={cabinetTab === 1 ? 'cabinet-tabs-item cabinet-tab__active' : 'cabinet-tabs-item'}
                        style={cabinetTab === 1 ? {background: `url("images/cabinet-tab2-1.png") no-repeat`, backgroundPosition: "19px"}: {}}
                        onClick={() => setCabinetTab(1)}
                    >
                        Поточні замовлення
                    </button>
                    <button
                        className={cabinetTab === 2 ? 'cabinet-tabs-item cabinet-tab__active' : 'cabinet-tabs-item'}
                        style={cabinetTab === 2 ? {background: `url("images/cabinet-tab3-1.png") no-repeat`, backgroundPosition: "19px"}: {}}
                        onClick={() => setCabinetTab(2)}
                    >
                        Особисті дані
                    </button>
                    <button
                        className={cabinetTab === 3 ? 'cabinet-tabs-item cabinet-tab__active' : 'cabinet-tabs-item'}
                        style={cabinetTab === 3 ? {background: `url("images/cabinet-tab4-1.png") no-repeat`, backgroundPosition: "19px"}: {}}
                        onClick={() => setCabinetTab(3)}
                    >
                        Змінити пароль
                    </button>
                    <button
                        className={cabinetTab === 4 ? 'cabinet-tabs-item cabinet-tab__active' : 'cabinet-tabs-item'}
                        style={cabinetTab === 4 ? {background: `url("images/cabinet-tab5-1.png") no-repeat`, backgroundPosition: "19px"}: {}}
                        onClick={() => setCabinetTab(4)}
                    >
                        Історія замовлень
                    </button>
                </div>
                <div className={cabinetTab === 0 ? "cabinet-main d-f" : "d-n"}>
                    <div className="cabinet-main-item">
                        <div><img src="images/cabinet-main1.png" alt="cabinet-main1" /></div>
                        <div className="cabinet-main-title">Поточні замовлення</div>
                    </div>
                    <div className="cabinet-main-item">
                        <div><img src="images/cabinet-main2.png" alt="cabinet-main2" /></div>
                        <div className="cabinet-main-title">Особисті дані</div>
                    </div>
                    <div className="cabinet-main-item">
                        <div><img src="images/cabinet-main3.png" alt="cabinet-main3" /></div>
                        <div className="cabinet-main-title">Історія замовлень</div>
                    </div>
                    <div className="cabinet-main-item">
                        <div><img src="images/cabinet-main4.png" alt="cabinet-main4" /></div>
                        <div className="cabinet-main-title">Змінити пароль</div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Cabinet