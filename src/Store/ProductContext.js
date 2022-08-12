import React from 'react'

const addProduct = () => {

}

const ProductContext = React.createContext({
  products: [],
  addProduct: addProduct
})

export default ProductContext