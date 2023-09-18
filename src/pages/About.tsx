import React from 'react'
import './About.css'

const About = () => {
    return (
        <main>
            <div className='catalog-breadcrumb d-f align-center'>
                <div className="catalog-bredcumb-item">Головна</div>
                <div><img src="images/point.png" alt="point" /></div>
                <div className="catalog-bredcumb-item">Про нас</div>
            </div>
            <div className="about-caption d-f align-center">
                <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
                <h3 className="about-title">Про нас</h3>
                <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
            </div>
            <div className="about-main">
                <p className="about-text">
                    <span>«Компанія ТОВ “ДАМАР АГРОТРЕЙД</span>  — молода команда, яка з’явилась на аграрному ринку у 2020 році.
                    Ми не боїмось труднощів і викликів. Тому навіть складний ковідний період, світова пандемія не стали
                    на заваді успішному старту.
                </p>
                <p className="about-text">
                    Отже, <span>ми — сміливі, ми — драйвові</span>, ми — ті, що розвивають рослинництво та допомагають ставати
                    успішними тисячам вітчизняних аграріїв.
                </p>
                <p className="about-text">
                    <span>Бачення:</span> компанія ТОВ “ДАМАР АГРОТРЕЙД” тримає курс на підвищення престижності, довіри
                    до засобів захисту рослин made in UA. Прагнемо, аби в кожному регіоні України наш споживач
                    мав доступ до якісної продукції та консалтингу від фахівців команди.
                </p>
                <p className="about-text">
                    <span>Місія:</span> усе продуктове портфоліо, консультативні послуги ТОВ “ДАМАР АГРОТРЕЙД” направлені на
                    підвищення рентабельності рослинництва в мінливих кліматичних умовах України. Також ставимо собі завдання
                    підвищувати обізнаність клієнтів щодо сучасних методів ведення рослинництва...
                </p>
                <div className="about-values">
                    <div className="about-values-title">Цінності:</div>
                    <ul className="about-values-list">
                        <li className="about-values-item">прозорість ділових стосунків з колегами, контрагентами, клієнтами;</li>
                        <li className="about-values-item">однаково висококласний сервіс для невеликого фермера та потужного холдингу;</li>
                        <li className="about-values-item">покращення якості товарів та послуг;</li>
                        <li className="about-values-item">постійна підтримка партнера на усіх етапах виробництва продукції рослинництва;</li>
                        <li className="about-values-item">екологічність у роботі, думках та цілях;</li>
                        <li className="about-values-item">підтримка вітчизняного продукту та вітчизняного виробника;</li>
                        <li className="about-values-item">постійний саморозвиток...</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default About