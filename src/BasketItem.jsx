import React from 'react'
import "./BasketItem.css"
import { useStateValue } from './StateProvider'

const BasketItem = () => {
    const [{basket}, dispatch] = useStateValue();

  return (
    <div className='basketItem'>
      
           {basket.map((item)=>{
            return(
                <div className="item">
                    <img className="item__image" src={item.image} alt="" />
                    <div className="item__info">
                        <p>{item.title}</p>
                        <p className='item__price'>
                            <small>₹</small>
                            <strong>{item.price}</strong>
                        </p>
                        <div className="item__rating">
                            {Array(item.rating)
                            .fill()
                            .map((_,i)=>(
                                <p>⭐</p>
                            ))}
                        </div>
                        <button>Remove from Basket</button>
                    </div>
                </div>
            )
           })}
      
      
    </div>
  )
}

export default BasketItem
