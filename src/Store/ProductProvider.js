import { useState } from 'react'
import ProductContext from './ProductContext'

import React from 'react'

function ProductProvider(props) {
    const [productState, setProduct] = useState([])

    const addProduct = (item) => {
        setProduct(item)
    }

    const context = {
        product: productState,
        addProduct: addProduct
    }
    return (
        <ProductContext.Provider value={context}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductProvider