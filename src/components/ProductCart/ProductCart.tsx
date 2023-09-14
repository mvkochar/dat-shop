import React from 'react'
import './ProductCart.css'


type ProductCartProps = {
    image: string
    title: string
    isExist?: boolean
    price: number
    count?: number

}

const ProductCart = ({image, title, isExist = true, price, count = 1}: ProductCartProps) => {
    return (
        <div className='product-cart'>
            <div><img src={image} alt="product-img" /></div>
            <div className="product-cart-content">
                <div className="product-cart-title">{title}</div>
                <div className={isExist ? "product-cart-exist" : "d-n" }>В наявності</div>
                <div className="d-f jc-sb" style={{marginTop: "17px"}}>
                    <div>
                        <div className="product-cart-price">{price} грн.</div>
                        <div className="product-cart-count">{count} шт.</div>
                    </div>
                    <button className='product-cart-btn'><img src="images/cart.png" alt="cart" /></button>
                </div>
            </div>
        </div>
    )
}

export default ProductCart