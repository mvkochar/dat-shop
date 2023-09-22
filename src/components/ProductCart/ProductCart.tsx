import React from 'react'
import './ProductCart.css'
import { Link } from 'react-router-dom'



type ProductCartProps = {
    image: string
    title: string
    isExist?: boolean
    price: number
    count?: number
    handleProductCount: () => void

}



const ProductCart = ({ image, title, isExist = true, price, count = 1, handleProductCount }: ProductCartProps) => {
    return (
        <div className='product-cart'>
            <div> <Link to={'/product'}><img src={image} alt="product-img" /></Link> </div>
            <div className="product-cart-content">
                <div className="product-cart-title">{title}</div>
                <div className={isExist ? "product-cart-exist" : "d-n"}>В наявності</div>
                <div className="d-f jc-sb" style={{ marginTop: "17px" }}>
                    <div>
                        <div className="product-cart-price">{price} грн.</div>
                        <div className="product-cart-count">{count} шт.</div>
                    </div>
                    <button className='product-cart-btn' onClick={handleProductCount}><img src="images/cart.png" alt="cart" /></button>
                </div>
            </div>
        </div>
    )
}

export default ProductCart