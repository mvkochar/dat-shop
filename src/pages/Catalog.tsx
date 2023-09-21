import React from 'react'
import './Catalog.css'
import ProductCart from '../components/ProductCart/ProductCart'

type CatalogProps = {
    handleProductCount: () => void
}

const Catalog = ({ handleProductCount }: CatalogProps) => {
    return (
        <main>
            <div className='catalog-breadcrumb d-f align-center'>
                <div className="catalog-bredcumb-item">Головна</div>
                <div><img src="images/point.png" alt="point" /></div>
                <div className="catalog-bredcumb-item">Каталог</div>
                <div><img src="images/point.png" alt="point" /></div>
                <div className="catalog-bredcumb-item bredcumb-item__active">Засоби захисту рослин</div>
            </div>
            <div className="catalog-caption d-f align-center">
                <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
                <h3 className="catalog-title">Засоби захисту рослин</h3>
                <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
            </div>
            <div className="catalog-info d-f jc-sb align-center">
                <div className="catalog-count">Показано 621 товарів</div>
                <form action="" className="catlog-info-fm">
                    <select name="sort">
                        <option value="">Сортувати за</option>
                    </select>
                </form>
            </div>
            <div className="catalog-wr d-f">
                <div>
                    <div className="catalog-categories d-f">
                        <div className="d-f jc-sb">
                            <div className="catalog-category-title category-title__active">Гербіциди</div>
                            <div className="catalog-category-count">(229)</div>
                        </div>
                        <div className="d-f jc-sb">
                            <div className="catalog-category-title">Фунгіциди</div>
                            <div className="catalog-category-count">(29)</div>
                        </div>
                        <div className="d-f jc-sb">
                            <div className="catalog-category-title">Інсектициди</div>
                            <div className="catalog-category-count">(9)</div>
                        </div>
                        <div className="d-f jc-sb">
                            <div className="catalog-category-title">Десиканти</div>
                            <div className="catalog-category-count">(209)</div>
                        </div>
                        <div className="d-f jc-sb">
                            <div className="catalog-category-title">Протруювачі</div>
                            <div className="catalog-category-count">(120)</div>
                        </div>
                        <div className="d-f jc-sb">
                            <div className="catalog-category-title">Ад’юванти</div>
                            <div className="catalog-category-count">(215)</div>
                        </div>
                        <div className="d-f jc-sb">
                            <div className="catalog-category-title">Родентициди</div>
                            <div className="catalog-category-count">(410)</div>
                        </div>
                        <div className="d-f jc-sb">
                            <div className="catalog-category-title">Ретарданти</div>
                            <div className="catalog-category-count">(30)</div>
                        </div>
                    </div>
                    <div className="catalog-filter">
                        <div className="catalog-filter-title">Фільтр</div>
                        <div className="catalog-filter-box d-f">
                            <div className="catalog-filter-bl">
                                <div className="filter-bl-title">Виробник</div>
                                <div className="filter-bl-box d-f">
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">Нертус</div>
                                    </div>
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">Басф</div>
                                    </div>
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">Адама Україна</div>
                                    </div>
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">Байєр</div>
                                    </div>
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">ГЗД</div>
                                    </div>
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">Штефес</div>
                                    </div>
                                </div>

                            </div>
                            <div className="catalog-filter-bl">
                                <div className="filter-bl-title">Культура</div>
                                <div className="filter-bl-box d-f">
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check item-check__selected"></div>
                                        <div className="bl-item-title">Соняшник</div>
                                    </div>
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">Кукурудза</div>
                                    </div>
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">Пшениця</div>
                                    </div>
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">Ячмінь</div>
                                    </div>
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">Ріпак</div>
                                    </div>
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">Соя</div>
                                    </div>
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">Горох</div>
                                    </div>
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">Боби</div>
                                    </div>
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">Гірчиця</div>
                                    </div>
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">Горошок</div>
                                    </div>
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">Житняк</div>
                                    </div>
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">Квасоля</div>
                                    </div>
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">Конюшина</div>
                                    </div>
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">Кострець/Костриця</div>
                                    </div>
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">Люцерна</div>
                                    </div>
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">Тимофіївка</div>
                                    </div>
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">Тритикале</div>
                                    </div>
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">Цукровий буряк</div>
                                    </div>
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">Кормовий буряк</div>
                                    </div>
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">Інше</div>
                                    </div>
                                </div>
                            </div>
                            <div className="catalog-filter-bl">
                                <div className="filter-bl-title">Кількість</div>
                                <div className="filter-bl-box d-f">
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">1</div>
                                    </div>
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">2</div>
                                    </div>
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">3</div>
                                    </div>
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">4</div>
                                    </div>
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">5</div>
                                    </div>
                                    <div className="filter-bl-item d-f align-center">
                                        <div className="bl-item-check"></div>
                                        <div className="bl-item-title">6</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="catalog-main d-f">
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
                        <ProductCart
                            image='images/new-product2.png'
                            title='Скор 250 ЕС к.э.'
                            price={589}
                            handleProductCount={handleProductCount}
                        />
                        <ProductCart
                            image='images/new-product1.png'
                            title='Петунія Софістика F1'
                            price={20}
                            handleProductCount={handleProductCount}
                        />
                        <ProductCart
                            image='images/new-product4.png'
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
                            image='images/new-product1.png'
                            title='Петунія Софістика F1'
                            price={20}
                            handleProductCount={handleProductCount}
                        />
                        <ProductCart
                            image='images/new-product4.png'
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
                            image='images/new-product1.png'
                            title='Петунія Софістика F1'
                            price={20}
                            handleProductCount={handleProductCount}
                        />
                        <ProductCart
                            image='images/new-product4.png'
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
                            image='images/new-product1.png'
                            title='Петунія Софістика F1'
                            price={20}
                            handleProductCount={handleProductCount}
                        />
                        <ProductCart
                            image='images/new-product4.png'
                            title='Петунія Софістика F1'
                            price={20}
                            handleProductCount={handleProductCount}
                        />
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
                </div>
            </div>
            <div className="catalog-about">
                <div className="catalog-about-caption d-f">
                    <div><img src="images/home-main-icon.png" alt="home-main-icon" /></div>
                    <h3 className="catalog-about-title">Засоби захисту рослин</h3>
                </div>
                <p className="catalog-about-text">
                    Засоби захисту рослин поділяють на чотири основні види: механічні, хімічні, біологічні та агротехнічні.
                    Проте найраціональніше - це їх одночасне, правильне поєднання. Найпоширеніший метод - це хімічний.
                    Існують тисячі різних видів препаратів хімічного захисту. Але не варто їх плутати, а тим більше
                    об′єднувати з хімічними добривами. Методи їх впливу на рослини абсолютно протилежні.
                </p>
                <p className="catalog-about-text">
                    Необхідно знати і розрізняти хімічні засоби захисту рослин. Адже ці препарати мають визначений
                    об′єкт впливу (збудник хвороби, комахи-шкідники, вид або родина бур′янів).
                </p>
                <p className="catalog-about-text">
                    Отрутохімікати не терплять халатності. Це той тип препарату, який недостатньо просто розвести у воді
                    і обприскати ним рослини. Якщо отрутохімікати неправильно застосувати, то вони можуть завдати шкоди вам,
                    корисним комахам, урожаю.
                </p>
            </div>

        </main >
    )
}

export default Catalog