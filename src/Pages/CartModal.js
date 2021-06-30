import React, { useContext, useState } from 'react'
import CartContext from '../Store/cartContext'
import { useCart } from "react-use-cart";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import CartOverlay from '../components/CartOverlay';



function CartModal() {
  const {
    isEmpty,
    cartTotal,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  const cartCtx = useContext(CartContext)

  if (isEmpty) return <p>Your cart is empty</p>;

  const closeCart = () => {
    cartCtx.cartClose()
  }

  return (
    <div>

      <div className='cart-overlay'>
        <h3 id='your-s-cart'>Your Shopping Cart</h3>
        {console.log(items)}
        <div className="cart">

          {items.map((item) => (
            <div className="cart-inner">
              <div className='cart-img'>
                <img src={`http://127.0.0.1:8000/${item.image}`} />
              </div>
              <div>
                <p>

                  {item.quantity} x {item.name}
                </p>

                {<span>N{item.price.toLocaleString()}</span>}

                <span onClick={() => removeItem(item.id)} className="cart-delete">
                  <Icon icon="fluent:delete-16-regular" />
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className='cart-bottom'>
          <h2 className="cart-amount">
            {/* Total Amount-N{cartTotal.toLocaleString()} */}
          </h2>
          <button className='cart-btn'>Buy Now</button>

          {/* <button onClick={closeCart} className='btn'>Close</button> */}

        </div>
      </div>
    </div>
  );

}

export default CartModal