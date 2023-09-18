import React from 'react'
import './Partners.css'

const Partners = () => {
    let companyDesc = "«Компанія ТОВ “ДАМАР АГРОТРЕЙД” — молода команда, яка з’явилась на аграрному ринку у 2020 році. Ми не боїмось труднощів і викликів. Тому навіть складний ковідний період, світова пандемія не стали на заваді успішному старту. Отже, ми — сміливі, ми — драйвові, ми — ті, що розвивають рослинництво та допомагають ставати успішними тисячам вітчизняних аграріїв."
    
    return (

        <main>
            <div className='catalog-breadcrumb d-f align-center'>
                <div className="catalog-bredcumb-item">Головна</div>
                <div><img src="images/point.png" alt="point" /></div>
                <div className="catalog-bredcumb-item">Партнери</div>
            </div>
            <div className="partners-caption d-f align-center">
                <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
                <h3 className="partners-title">Партнери</h3>
                <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
            </div>
            <div className="partners-box d-f">
                <div className="partners-item">
                    <div className="partners-item-caption d-f align-center">
                        <div className="partners-item-img"><img src="images/partners1.png" alt="partners1" /></div>
                        <div className="partners-item-title">ТОВ МП "Майбутнє Будуємо Разом"</div>
                    </div>
                    <p className="partners-item-desc">
                        {companyDesc}
                    </p>
                </div>
                <div className="partners-item">
                    <div className="partners-item-caption d-f align-center">
                        <div className="partners-item-img"><img src="images/partners2.png" alt="partners2" /></div>
                        <div className="partners-item-title">ТОВ МП "Майбутнє Будуємо Разом"</div>
                    </div>
                    <p className="partners-item-desc">
                        {companyDesc}
                    </p>
                </div>
                <div className="partners-item">
                    <div className="partners-item-caption d-f align-center">
                        <div className="partners-item-img"><img src="images/partners3.png" alt="partners3" /></div>
                        <div className="partners-item-title">ТОВ МП "Майбутнє Будуємо Разом"</div>
                    </div>
                    <p className="partners-item-desc">
                        {companyDesc}
                    </p>
                </div>
                <div className="partners-item">
                    <div className="partners-item-caption d-f align-center">
                        <div className="partners-item-img"><img src="images/partners4.png" alt="partners4" /></div>
                        <div className="partners-item-title">ТОВ МП "Майбутнє Будуємо Разом"</div>
                    </div>
                    <p className="partners-item-desc">
                        {companyDesc}
                    </p>
                </div>
                <div className="partners-item">
                    <div className="partners-item-caption d-f align-center">
                        <div className="partners-item-img"><img src="images/partners5.png" alt="partners5" /></div>
                        <div className="partners-item-title">ТОВ МП "Майбутнє Будуємо Разом"</div>
                    </div>
                    <p className="partners-item-desc">
                        {companyDesc}
                    </p>
                </div>
                <div className="partners-item">
                    <div className="partners-item-caption d-f align-center">
                        <div className="partners-item-img"><img src="images/partners6.png" alt="partners6" /></div>
                        <div className="partners-item-title">ТОВ МП "Майбутнє Будуємо Разом"</div>
                    </div>
                    <p className="partners-item-desc">
                        {companyDesc}
                    </p>
                </div>
                <div className="partners-item">
                    <div className="partners-item-caption d-f align-center">
                        <div className="partners-item-img"><img src="images/partners7.png" alt="partners7" /></div>
                        <div className="partners-item-title">ТОВ МП "Майбутнє Будуємо Разом"</div>
                    </div>
                    <p className="partners-item-desc">
                        {companyDesc}
                    </p>
                </div>
                <div className="partners-item">
                    <div className="partners-item-caption d-f align-center">
                        <div className="partners-item-img"><img src="images/partners7.png" alt="partners7" /></div>
                        <div className="partners-item-title">ТОВ МП "Майбутнє Будуємо Разом"</div>
                    </div>
                    <p className="partners-item-desc">
                        {companyDesc}
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Partners