import CartContext from "./cartContext"
import { useReducer } from "react"


const initialCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item)
        //concat gives us a brand new array insteead of using push
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }

    }
    return initialCartState
}

const CartProvider = props => {

    const [cartState, dispatchCart] = useReducer(cartReducer, initialCartState)

    const addItemToCart = (item) => {
        dispatchCart({ type: 'ADD', item: item })
    }

    const removeItemFromCart = (id) => {
        dispatchCart({ type: 'REMOVE', id: id })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItemm: removeItemFromCart
    }

    return <CartContext.Provider value={cartContext
    }>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider
