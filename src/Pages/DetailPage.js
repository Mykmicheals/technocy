import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import CartContext from '../Store/cartContext'
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import CartModal from './CartModal';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

function DetailPage() {
  const [cartOpen, setCart] = useState(false)
  const [details, setDetails] = useState()
  const [related, setRelated] = useState()
  const [sucess, setSucess] = useState(false)
  const params = useParams();


  const fetchHandler = async () => {
    const response = await fetch(`http://127.0.0.1:8000/popular/${params.slug}`)
    const data = await response.json()
    setDetails(data)

    const relatedResponse = await fetch('http://127.0.0.1:8000/popular_products')
    const relatedData = await relatedResponse.json()
    setRelated(relatedData)

    setSucess(true)
  }
  useEffect(() => {
    fetchHandler()
  }, [])


  const cartHandler = () => {
    setCart(cartOpen => !cartOpen)
  }

  return (
    sucess && <div >
      <form className='container'>
        <div>
          <img src={`http://127.0.0.1:8000/${details.image}`} alt={details.name} />
        </div>
        <div className='description'>
          <h2>{details.name}</h2>
          <p>{details.description}</p>
          {/* <button
            type='submit'
            className='button'
            onClick={cartHandler}
          >Add To Cart</button> */}
        </div>
      </form>

      <div className='featured'>
        <h4 className='section-heading'> Related Products </h4>

        {sucess && <ul>
          {related.map((each) => {
            if (each.category === details.category) {

              return (
                <Link to={`/details/${each.slug}`} >

                  <li key={each.id}>
                    <img src={`http://127.0.0.1:8000/${each.image}`} alt={each.name} />
                    <p className='popular-cat'>{each.category}</p>
                    <h5 className='popular-right-head'>{each.name}</h5>
                    <div>
                      <i id='star'><Icon icon="ant-design:star-filled" /></i>
                      <i id='star'><Icon icon="ant-design:star-filled" /></i>
                      <i id='star'><Icon icon="ant-design:star-filled" /></i>
                      <i id='star'><Icon icon="ant-design:star-filled" /></i>
                      {each.star === 4 && <i id='colored-star'><Icon icon="ant-design:star-filled" /></i>}
                      {each.star === 5 && <i id='star'><Icon icon="ant-design:star-filled" /></i>}

                    </div>
                    <p id='price'>₦{each.price}</p>
                  </li>
                </Link>)
            }
          })}
        </ul>}
      </div>
      <Rodal
        customStyles={{ overflowY: 'scroll', textAlign: 'center' }}
        visible={cartOpen}
        onClose={cartHandler}
        closeOnEsc='true'
        animation='slideLeft'
        height='520'
        showMax='false'
      >
        {/* <CartModal /> */}
      </Rodal>
    </div>
  )
}

export default DetailPage