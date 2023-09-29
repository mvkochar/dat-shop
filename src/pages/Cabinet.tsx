import React from 'react'
import './Cabinet.css'
import { url } from 'inspector'

const Cabinet = () => {
    const cabinetTitles = ['Мій кабінет', 'Поточні замовлення', 'Особисті дані', 'Змінити пароль', 'Історія замовлень']
    const [cabinetTab, setCabinetTab] = React.useState(2)
    const [editabledFirst, setEditabledFirst] = React.useState(false)
    const [editabledSecond, setEditabledSecond] = React.useState(false)
    const [editabledThird, setEditabledThird] = React.useState(false)
    const [editabledFourth, setEditabledFourth] = React.useState(false)
    const [editabledFifth, setEditabledFifth] = React.useState(false)

    const handleEditabledFirst = (event: React.SyntheticEvent<EventTarget>) => {
        event.preventDefault()
        setEditabledFirst((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleEditabledSecond = (event: React.SyntheticEvent<EventTarget>) => {
        event.preventDefault()
        setEditabledSecond((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleEditabledThird = (event: React.SyntheticEvent<EventTarget>) => {
        event.preventDefault()
        setEditabledThird((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleEditabledFourth = (event: React.SyntheticEvent<EventTarget>) => {
        event.preventDefault()
        setEditabledFourth((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleEditabledFifth = (event: React.SyntheticEvent<EventTarget>) => {
        event.preventDefault()
        setEditabledFifth((prevState) => {
            return (
                !prevState
            )
        })
    }

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
                        style={cabinetTab > 0 ? { background: `url("images/cabinet-tab1-1.png") no-repeat`, backgroundPosition: "19px" } : {}}
                        onClick={() => setCabinetTab(0)}
                    >
                        Мій кабінет
                    </button>
                    <button
                        className={cabinetTab === 1 ? 'cabinet-tabs-item cabinet-tab__active' : 'cabinet-tabs-item'}
                        style={cabinetTab === 1 ? { background: `url("images/cabinet-tab2-1.png") no-repeat`, backgroundPosition: "19px" } : {}}
                        onClick={() => setCabinetTab(1)}
                    >
                        Поточні замовлення
                    </button>
                    <button
                        className={cabinetTab === 2 ? 'cabinet-tabs-item cabinet-tab__active' : 'cabinet-tabs-item'}
                        style={cabinetTab === 2 ? { background: `url("images/cabinet-tab3-1.png") no-repeat`, backgroundPosition: "19px" } : {}}
                        onClick={() => setCabinetTab(2)}
                    >
                        Особисті дані
                    </button>
                    <button
                        className={cabinetTab === 3 ? 'cabinet-tabs-item cabinet-tab__active' : 'cabinet-tabs-item'}
                        style={cabinetTab === 3 ? { background: `url("images/cabinet-tab4-1.png") no-repeat`, backgroundPosition: "19px" } : {}}
                        onClick={() => setCabinetTab(3)}
                    >
                        Змінити пароль
                    </button>
                    <button
                        className={cabinetTab === 4 ? 'cabinet-tabs-item cabinet-tab__active' : 'cabinet-tabs-item'}
                        style={cabinetTab === 4 ? { background: `url("images/cabinet-tab5-1.png") no-repeat`, backgroundPosition: "19px" } : {}}
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
                <div className={cabinetTab === 1 ? "cabinet-current" : "d-n"}>
                    <div className="cabinet-current-order d-f align-center">
                        <div className="current-order-img"><img src="images/Products/product-min3.png" alt="product-min" /></div>
                        <div className="current-order-info">
                            <div className="current-order-title">Гербіцид Комманд<sup>&#174;</sup>, ФМС УКРАЇНА</div>
                            <div className="d-f align-center">
                                <div className="current-order-count">Кількість х1</div>
                                <div className="current-order-date">20.05.2021</div>
                                <div className="current-order-status order-status__paid">Сплачено</div>
                            </div>
                        </div>
                        <div className="current-order-price">7814,63 грн</div>
                        <button className='current-order-remove'><img src="images/remove2.png" alt="remove" /></button>
                    </div>
                    <div className="cabinet-current-order d-f align-center">
                        <div className="current-order-img"><img src="images/Products/product-min3.png" alt="product-min" /></div>
                        <div className="current-order-info">
                            <div className="current-order-title">Гербіцид Комманд<sup>&#174;</sup>, ФМС УКРАЇНА</div>
                            <div className="d-f align-center">
                                <div className="current-order-count">Кількість х1</div>
                                <div className="current-order-date">20.05.2021</div>
                                <div className="current-order-status order-status__road">В дорозі</div>
                            </div>
                        </div>
                        <div className="current-order-price">7814,63 грн</div>
                        <button className='current-order-remove'><img src="images/remove2.png" alt="remove" /></button>
                    </div>
                    <div className="cabinet-current-order d-f align-center">
                        <div className="current-order-img"><img src="images/Products/product-min3.png" alt="product-min" /></div>
                        <div className="current-order-info">
                            <div className="current-order-title">Гербіцид Комманд<sup>&#174;</sup>, ФМС УКРАЇНА</div>
                            <div className="d-f align-center">
                                <div className="current-order-count">Кількість х1</div>
                                <div className="current-order-date">20.05.2021</div>
                                <div className="current-order-status order-status__finish">Завершено</div>
                            </div>
                        </div>
                        <div className="current-order-price">7814,63 грн</div>
                        <button className='current-order-remove'><img src="images/remove2.png" alt="remove" /></button>
                    </div>
                </div>
                <form action="" className={cabinetTab === 2 ? "cabinet-personal" : "d-n"}>
                    <div className="personal-input-bl d-f">
                        <div>
                            <label htmlFor="fname">Ім’я</label>
                            <div className="personal-input-wr d-f">
                                <input
                                    type="text"
                                    name='fname'
                                    id='fname'
                                    placeholder='Людмила'
                                    readOnly={editabledFirst ? false : true}
                                />
                                <button
                                    className='input-edit-btn'
                                    onClick={(event: React.SyntheticEvent<EventTarget>) => handleEditabledFirst(event)}
                                >
                                    <img src="images/pencil1.png" alt="pencil" />
                                </button>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="lname">Прізвище</label>
                            <div className="personal-input-wr d-f">
                                <input type="text" name='lname' id='lname' placeholder='Жук' readOnly={editabledSecond ? false : true} />
                                <button
                                    className='input-edit-btn'
                                    onClick={(event: React.SyntheticEvent<EventTarget>) => handleEditabledSecond(event)}
                                >
                                    <img src="images/pencil1.png" alt="pencil" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="personal-input-bl d-f">
                        <div>
                            <label htmlFor="phone">Телефон</label>
                            <div className="personal-input-wr d-f">
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    placeholder='+38 (050)-528-85-95'
                                    readOnly={editabledThird ? false : true}
                                />
                                <button
                                    className='input-edit-btn'
                                    onClick={(event: React.SyntheticEvent<EventTarget>) => handleEditabledThird(event)}
                                >
                                    <img src="images/pencil1.png" alt="pencil" />
                                </button>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email">Пошта</label>
                            <div className="personal-input-wr d-f">
                                <input
                                    type="email"
                                    name='email'
                                    id='email'
                                    placeholder='juchok@gmail.com'
                                    readOnly={editabledFourth ? false : true}
                                />
                                <button
                                    className='input-edit-btn'
                                    onClick={(event: React.SyntheticEvent<EventTarget>) => handleEditabledFourth(event)}
                                >
                                    <img src="images/pencil1.png" alt="pencil" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="personal-input-bl">
                        <label htmlFor="address">Адреса для доставки</label>
                        <div className="personal-input-wr address-input-wr d-f">
                            <input
                                type="text"
                                name="address"
                                id="address"
                                placeholder='61002 Харків вул. Каразіна 4, кв.12'
                                readOnly={editabledFifth ? false : true}
                            />
                            <button
                                className='input-edit-btn'
                                onClick={(event: React.SyntheticEvent<EventTarget>) => handleEditabledFifth(event)}
                            >
                                <img src="images/pencil1.png" alt="pencil" />
                            </button>
                        </div>
                    </div>
                    <button className='cabinet-personal-save'>Зберегти</button>
                </form>
            </div>
        </main>
    )
}

export default Cabinet