import React, { useState, useEffect, Fragment } from 'react'
import { useParams, Link } from 'react-router-dom'

function CategoryPage() {

    const params = useParams();
    // const linkParams  = params.id.toLowerCase()
    const [popular, setPopular] = useState([])
    const [categoryState, setCategory] = useState([])
    const [brandState, setBrand] = useState([])


    const fetchHandler = async () => {
        const response = await fetch(`http://127.0.0.1:8000/popular_products`)
        const data = await response.json()
        setPopular(data)

        const categoryResponse = await fetch('http://127.0.0.1:8000')
        const catData = await categoryResponse.json()
        setCategory(catData)

        const brandResponse = await fetch('http://127.0.0.1:8000/brands')
        const brandData = await brandResponse.json()
        setBrand(brandData)
    }

    useEffect(() => {
        fetchHandler()
        window.scrollTo(0, 0)
    }, [])

    return (

        <div className='popular-section'>
            <h2 >{params.name}</h2>
            <div className='popular-all'>
                
                <div className='popular-left'>
                    <ul>
                        <h3> Categories</h3>
                        {categoryState.map((each) => {
                            return (
                                <li>{each.name}</li>
                            )
                        })}
                    </ul>

                    <ul>
                        <h3>Brands</h3>
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
                            if (each.category.toLowerCase() === params.name) {
                                return (
                                    <Link to={`/details/${each.slug}`} exact>
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
                            }

                        })}

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CategoryPage