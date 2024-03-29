import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'

const CheckoutProduct = ({id, title, image, price ,rating}) => {
  const [{basket}, despatch] = useStateValue();

  const removeFromBasket=()=>{
    // it will remove the item from the basket
      despatch({
        type: "REMOVE_FROM_BASKET",
        id: id
      })
  }

  return (
    <div className='checkoutProduct'>

      <img className='checkoutProduct__image' src={image} alt="product-img" />

      <div className="checkoutProduct__info">
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
            <small>₹</small>
            <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
            {Array(rating)
            .fill()
            .map((_,i)=>(
                <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Cart</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
