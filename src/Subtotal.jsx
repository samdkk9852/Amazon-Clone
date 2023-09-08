import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'

const Subtotal = () => {

    const [{basket}, dispatch] = useStateValue();

    let totalprice = basket.reduce((accumulator, currentValue) =>{
        return accumulator + currentValue.price
    },0)

  return (
    <div className='subtotal'>
        {/* subtotal  */}
     <CurrencyFormat 
        renderText={(value) => (
            <>
                <p>
                    Subtotal ({basket?.length} items) : <strong>{totalprice}</strong>
                </p>  
                <small className='subtotal__gift'>
                    <input type="checkbox" /> This order contains a gift
                </small>
            </>
        )}
        decimalScale={2}
        value={totalprice}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
     />
     <button>Proceed To Checkout</button>
    </div>
  )
}

export default Subtotal
