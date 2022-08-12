import React, { useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Card from '../components/Card'
import ProductContext from '../Store/ProductContext'
import { Icon } from '@iconify/react';

function SearchResult() {
    const params = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const productCtx = useContext(ProductContext)
    var items = productCtx?.product
    var searchParams = params.params

    return (
        <div className='featured search-result'>
            <h2 className='search-head'>Search Result</h2>
            <ul>
                {items?.map((each) => {
                    if (each.name.toLowerCase().includes(searchParams)) {
                        return (
                            <Link to={`/details/${each.slug}`} >

                                <li className='featured-list' key={each.id}>
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
                                <button className='cart-button'>Add to Cart</button>
                            </Link>
                        )
                    }
                })}
            </ul>
        </div>
    )
}

export default SearchResult