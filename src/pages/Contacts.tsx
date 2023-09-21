import React from 'react'
import './Contacts.css'

const Contacts = () => {
    return (
        <main>
            <div className='catalog-breadcrumb d-f align-center'>
                <div className="catalog-bredcumb-item">Головна</div>
                <div><img src="images/point.png" alt="point" /></div>
                <div className="catalog-bredcumb-item">Контакти</div>
            </div>
            <div className="contacts-caption d-f align-center">
                <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
                <h3 className="contacts-title">Контакти</h3>
                <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
            </div>
            <div className="contacts-info">
                <div className="d-f jc-sa">
                    <div className="contacts-address">Україна, Вінницька область, Вінниця, Хмельницьке шосе, 122</div>
                    <div className="contacts-times"><span>Пн-Пт</span> 9.00-18.00</div>
                    <div className="contacts-email">shop@ukrsemena.com</div>
                </div>
                <div className="contacts-consultatiion">
                    <div className="contacts-consultation-title">Відділ продажу та агрономічного супроводу</div>
                    <div className="contacts-consultation-subtitle">
                        Якщо Вам потрібна допомога при оформленні замовлення, консультація по використанню товарів,
                        є питання що до Ваших замовлень звертайтеся сюди:
                    </div>
                    <div className="contacts-consultation-box d-f jc-sb">
                        <div className="contacts-times"><span>Пн-Пт</span> 9.00-18.00</div>
                        <div className="phones-bl d-f">
                            <div className="contacts-phones">(050) 42-42-820 (050) 42-42-824</div>
                            <div className="contacts-phones">(097) 182-51-41 (098) 123-70-00</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contacts-message">
                <div className="contacts-caption d-f align-center">
                    <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
                    <h3 className="contacts-title">Напишіть нам</h3>
                    <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
                </div>
                <p className="contacts-message-desc">
                    Введіть ваші контактні дані і текст повідомлення, якщо у вас виникли 
                    питання або пропозиції, і ми найближчим часом відповімо вам.
                </p>
                <form action="" className='contacts-message-fm'>
                    <div className="input-bl d-f">
                        <input type="text" name='clientName' placeholder="Ім'я"/>
                        <input type="text" name='lastName' placeholder='Прізвище' />
                    </div>
                    <div className="input-bl d-f">
                         <input type="tel" name="phone" placeholder='Телефон' />
                         <input type="email" name="email" placeholder='E-mail'/>
                    </div>
                    <textarea name="message" placeholder='Ваше повідомлення'></textarea>
                    <button>Відправити</button>
                </form>
            </div>
        </main>
    )
}

export default Contacts