
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Category() {
    const [popular, setPopular] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchHandler = async () => {
        const response = await fetch('http://127.0.0.1:8000/category')
        const data = await response.json()
        setPopular(data)
        setLoading(true);
    }

    // const categoryFirst = popular.slice(0, 3)
    // const categorySecond = popular.slice(4, 6)

    useEffect(() => {
        fetchHandler()
    }, [])


    return (
        <div>
            {loading && <div className='category'>
                <div className='category-left'>
                    <div className='category-left-first'>
                        <Link to={'/category/phones/'}>
                            <div id='cat1'>
                                <div id='cat-word'>
                                    <h3>SmartPhones</h3>
                                    <p>1,423 products</p>
                                </div>
                                <img id='cat-img' src={`http://127.0.0.1:8000/${popular[0]?.image}`} alt={popular[0].name} />
                            </div>
                        </Link>
                    </div>
                    <div className='category-left-second'>
                        <Link to={'/category/laptops/'}>
                            <div id='cat2'>
                                <div id='cat-word'>
                                    <h3>Laptops</h3>
                                    <p>918 products</p>
                                </div>
                                <img id='cat-img' src={`http://127.0.0.1:8000/${popular[1].image}`} alt={popular[1].name} />
                            </div>
                        </Link>

                        <Link to={'/category/laptops/'}>
                            <div id='cat3'>
                                <div id='cat-word'>
                                    <h3>Home Appliances</h3>
                                    <p>1,200 products</p>
                                </div>
                                <img id='cat-img' src={`http://127.0.0.1:8000/${popular[5].image}`} alt={popular[1].name} />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='category-left category-right'>

                    <div className='category-left-first'>
                        <Link to={'/category/television/'}>
                            <div id='cat1'>
                                <div id='cat-word'>
                                    <h3>Televisions</h3>
                                    <p>98 products</p>
                                </div>
                                <img id='cat-img' src={`http://127.0.0.1:8000/${popular[2].image}`} alt={popular[3].name} />
                            </div>
                        </Link>
                    </div>
                    <div className='category-left-second'>
                        <div id='cat2'>
                            <div id='cat-word'>
                                <h3>Airpods</h3>
                                <p>314 products</p>
                            </div>

                            <img id='cat-img' src={`http://127.0.0.1:8000/${popular[4].image}`} alt={popular[3].name} />
                        </div>
                        <div id='cat3'>
                            <div id='cat-word'>
                                <h3>Gaming</h3>
                                <p>52 products</p>
                            </div>
                            <img id='cat-img' src={`http://127.0.0.1:8000/${popular[3].image}`} alt={popular[3].name} />
                        </div>
                    </div>

                </div>
            </div>}
        </div>
    )
}

export default Category