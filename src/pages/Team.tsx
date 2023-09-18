import React from 'react'
import './Team.css'

const Team = () => {
    return (
        <main>
            <div className='catalog-breadcrumb d-f align-center'>
                <div className="catalog-bredcumb-item">Головна</div>
                <div><img src="images/point.png" alt="point" /></div>
                <div className="catalog-bredcumb-item">Про нас</div>
                <div><img src="images/point.png" alt="point" /></div>
                <div className="catalog-bredcumb-item">Наша команда</div>
            </div>
            <div className="team-caption d-f align-center">
                <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
                <h3 className="team-title">Наша команда</h3>
                <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
            </div>
            <div className="team-main">
                <p className="team-text">
                    <span>Наша команда</span> – це талановитий колектив професіоналів, об'єднаний спільними цілями та цінностями.
                    Кожен із співробітників є важливою ланкою в загальній роботі компанії, робить свій внесок у
                    її розвиток та успіх. Ми відповідаємо за результати нашої діяльності перед клієнтами та за виконання
                    своїх зобов'язань перед діловими партнерами. Стараємось максимально заощадити Ваш час та гроші і гарантуємо,
                    що з нашою командою професійних менеджерів Ви вирішите усі питання за мінімальний проміжок часу.
                </p>
                <p className="team-text">
                    <span>Наш досвід роботи</span>, орієнтація на результат, відповідальність, відданість справі допомагають
                    нам краще розуміти ринкові потреби і підтримувати високі стандарти якості обслуговування
                    клієнтів та партнерів...
                </p>
            </div>
            <div className="team-members">
                <div className="team-caption d-f align-center">
                    <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
                    <h3 className="team-title">З вами працюють</h3>
                    <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
                </div>
                <div className="team-members-box d-f jc-sb">
                    <div className="team-members-item">
                        <div><img src="images/team-member1.png" alt="team-member" /></div>
                        <div className="members-item-title">Євгенія Флор</div>
                    </div>
                    <div className="team-members-item">
                        <div><img src="images/team-member2.png" alt="team-member" /></div>
                        <div className="members-item-title">Євген Флор</div>
                    </div>
                    <div className="team-members-item">
                        <div><img src="images/team-member3.png" alt="team-member" /></div>
                        <div className="members-item-title">Вікторія Флор</div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Team