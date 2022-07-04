import React, { useState } from 'react'

const CartContext = React.createContext({
    cartOpen: false,
    cartFunc: () => { },
    cartClose: () => { }
})

export const CartContextProvider = (props) => {
    const [cartOpen, setCartOpen] = useState(false)

    const cartHandler = () => {
        setCartOpen(cartOpen => !cartOpen)
    }
    const closeCart = () => {
        setCartOpen(false)
    }

    var contextValue = {
        cartOpen: cartOpen,
        cartFunc: cartHandler,
        cartClose: closeCart
    }

    return <CartContext.Provider value={contextValue}>
        {props.children}
    </CartContext.Provider>
}

export default CartContext