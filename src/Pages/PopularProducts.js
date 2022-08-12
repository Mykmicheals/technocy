import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import ProductContext from '../Store/ProductContext';

function PopularProducts() {

    const productCtx = useContext(ProductContext)

    const params = useParams();
    const linkParams = params.id.toLowerCase()

    const [popular, setPopular] = useState([])
    const [categoryState, setCategory] = useState([])
    const [brandState, setBrand] = useState([])


    const fetchHandler = async () => {
        const response = await fetch(`http://127.0.0.1:8000/${linkParams}`)
        const data = await response.json()
        setPopular(data)
        //    productCtx.addProduct(data)

        const categoryResponse = await fetch('http://127.0.0.1:8000')
        const catData = await categoryResponse.json()
        setCategory(catData)

        const brandResponse = await fetch('http://127.0.0.1:8000/brands')
        const brandData = await brandResponse.json()
        setBrand(brandData)
    }

    useEffect(() => {
        fetchHandler()
    }, [])


    return (
        <div className='popular-all'>
            <div className='popular-left'>
                <ul>
                    <h3>Product Categories</h3>
                    {categoryState.map((each) => {
                        return (
                            <li>{each.name}</li>
                        )
                    })}


                </ul>

                <ul>
                    <h3>Product Brands</h3>
                    {brandState.map((each) => {
                        return (
                            <div>

                                <li>   <input type='checkbox' />{each.name}</li>
                            </div>

                        )
                    })}


                </ul>

            </div>
            <div className='popular-right'>
                <ul>
                    {popular.map((each) => {
                        return (
                            <Link to={`/details/${each.slug}`} >
                                <li key={each.id}>
                                    <img src={`http://127.0.0.1:8000/${each.image}`} alt={each.name} />
                                    <div className='popular-right-inner'>
                                        <p className='popular-cat'>{each.category}</p>
                                        <h5 className='popular-right-head'>{each.name}</h5>
                                        <p id='price'>N{each.price}</p>
                                    </div>
                                </li>
                            </Link >
                        )

                    })}

                </ul>
            </div>
        </div>
    )
}

export default PopularProducts