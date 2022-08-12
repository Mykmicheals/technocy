import React, { useContext } from 'react'
import CartContext from '../Store/cartContext'

function CartPage() {
    const cartCtx = useContext(CartContext)
  return (
      <div className='cart-page'>
          <ul>
          {cartCtx.items.map((each) => {
              return (
                  <li className='cart-inner'>
                        <img src={each.image} />
                      <p>{each.name}</p>
                      <p>N{each.price}</p>
                </li>
            )
          })}
              </ul>
          <div>
              <p>Price</p>
        </div>
    </div>
  )
}

export default CartPage