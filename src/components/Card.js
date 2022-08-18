import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useCart } from "react-use-cart";
import CartContext from '../Store/cartContext';
function Card({ each }) {

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

    var category = each[0]?.category
    return (
        <div>
            <div id='view-all'>
                <h2 className='section-heading'>{category}</h2>

                {/* <Link to='/all/popular_products'> */}
                <Link to={`/category/${category?.toLowerCase()}`} >
                    <p>View all <Icon icon="ic:twotone-greater-than" inline={true} /> </p>
                </Link>
            </div>
            <div className='featured'>
                <ul>
                    {each.map((each) => {
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
                    })}


                </ul>
            </div>
        </div>
    )
}

export default Card