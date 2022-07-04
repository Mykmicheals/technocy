import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



function Categories() {
    const [popular, setPopular] = useState([])

    const fetchHandler = async () => {
        const response = await fetch('http://127.0.0.1:8000')
        const data = await response.json()
        setPopular(data)
    }


    useEffect(() => {
        fetchHandler()
    }, [])

    const newPopular = popular.slice(0, 4)
    return (

        <div className='category'>
            <h2 className='section-heading'>Categories</h2>
            <ul className='category-list'>
                {newPopular.map((each) => {

                    return (
                        <Link to={`/category/${each.name.toLowerCase()}`}>
                            <li key={each.id}>
                                <div className='category-inner'>
                                    <img src={`http://127.0.0.1:8000/${each.image}`} alt={each.name} />
                                    <div className='category-text'>
                                        <h5>{each.name}</h5>
                                        <p>Starting at N56,000</p>
                                    </div>
                                </div>
                            </li>
                        </Link>
                    )
                })}
            </ul>

        </div>

    )
}

export default Categories