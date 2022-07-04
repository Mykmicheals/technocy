import React, { useState, useEffect, useContext } from 'react'
import CartContext from '../Store/cartContext';
import Time from '../components/Time'
import ProductContext from '../Store/ProductContext';
import Card from './Card';


function Featured() {
  const productCtx = useContext(ProductContext)

  const [show, setShow] = useState(false)

  const showCartHandler = () => {
    setShow(true)
  }


  const [popular, setPopular] = useState([])
  const [television, setTelevision] = useState([])

  const fetchHandler = async () => {
    const response = await fetch('http://127.0.0.1:8000/popular_products')
    const data = await response.json()
    setPopular(data)
    productCtx.addProduct(data)

    const telResponse = await fetch('http://127.0.0.1:8000/television')
    const telData = await telResponse.json()
    setTelevision(telData)
  }

  useEffect(() => {
    fetchHandler()

  }, [])


  const popularP = popular.slice(0, 5)

  const phones = []
  const Laptops = []
  const Televisions = []

  popular.map((each) => {
    if (each.category === 'Phones') {
      phones.push(each)
    }
  })


  popular.map((each) => {
    if (each.category === 'Laptops') {
      Laptops.push(each)
    }
  })

  popular.map((each) => {
    if (each.category === 'Television') {
      Televisions.push(each)
    }
  })

  const Laptops5 = Laptops.slice(0, 5)
  const Phones5 = phones.slice(0, 5)
  var token = localStorage.getItem('token')
  return (
    <div className='featured-outer'>

      <Card each={popularP} />
      <Card each={Laptops5} />
      <Card each={Phones5} />
      <Card each={Televisions} />

      <div className='deal'>
        <img src={`http://127.0.0.1:8000/${popularP[2]?.image}`} />
        <span>
          <h2>Deal of the Day</h2>
          <p>Save Up to 60% Off!!</p>
          <small>Praesent nec finibus massa. Phasellus id auctor lacus, at iaculis lorem. Donec quis arcu elit. In vehicula purus se.</small><br />
          <Time />
          <button className='button'> Buy Now</button>
        </span>
      </div>

    </div>
  )
}

export default Featured