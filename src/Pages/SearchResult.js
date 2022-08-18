import React, { useState,useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Card from '../components/Card'
import ProductContext from '../Store/ProductContext'
import { Icon } from '@iconify/react';
import { useCart } from "react-use-cart";
import CartContext from '../Store/cartContext';

function SearchResult() {
    const params = useParams()
    const productCtx = useContext(ProductContext)
    var items = productCtx?.product
    var searchParams = params.params


    const { addItem } = useCart();
    const [showBtn, setShow] = useState(false)
    const cartCtx = useContext(CartContext)
    


    const showModal = (e) => {
        e.preventDefault()
        cartCtx.cartFunc()
    }

    const buttonShowHandler = (id) => {
        setShow(true)
    }
    const buttonHideHandler = () => {
        setShow(false)
    }

    const [id, setId] = useState('')


    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])

    return (
        <div className='search-result'>
            <h2 className='search-head'>Search Result</h2>
            <div className='featured'>
                <ul>
                    {items?.map((each) => {
                        if (each.name.toLowerCase().includes(searchParams)) {
                            return (
                                <form onSubmit={showModal}>
                                    <li onMouseEnter={buttonShowHandler}
                                        onMouseOver={() => setId(each.id)}
                                        onMouseLeave={buttonHideHandler}
                                        className='featured-list' key={each.id}>
                                        <Link to={`/details/${each.slug}`} >

                                            <img src={`http://127.0.0.1:8000/${each.image}`} alt={each.name} />
                                            <p className='popular-cat'>{each.category}</p>
                                            <h5 className='popular-right-head'>{each.name.substring(0, 60)}</h5>
                                            <div>
                                                <i id='star'><Icon icon="ant-design:star-filled" /></i>
                                                <i id='star'><Icon icon="ant-design:star-filled" /></i>
                                                <i id='star'><Icon icon="ant-design:star-filled" /></i>
                                                <i id='star'><Icon icon="ant-design:star-filled" /></i>
                                                {each.star === 4 && <i id='colored-star'><Icon icon="ant-design:star-filled" /></i>}
                                                {each.star === 5 && <i id='star'><Icon icon="ant-design:star-filled" /></i>}

                                            </div>
                                        </Link>

                                        <p id='price'>₦{each.price}</p>
                                        {id === each.id && showBtn && <button type='submit' onClick={() => addItem(each)} className='cart-button'>Add to Cart</button>}
                                    </li>
                                </form>

                            )
                        }
                    })}


                </ul>
            </div>
        </div>
    )
}

export default SearchResult