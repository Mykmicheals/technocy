import React, { useState, useEffect } from 'react'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'


function Blogs() {
    const [newsData, setData] = useState();
    const [sucess, setSucess] = useState();

    const fetchNews = async () => {
        const response = await fetch(
            'https://content.guardianapis.com/search?api-key=99b95102-072a-4131-ba40-bc800d0fd653&show-fields=thumbnail&q=tech&page-size=3&show-blocks=all'
        );
        const data = await response.json();
        console.log(data)
        setData(data.response.results);
        setSucess(true);
    };
    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <div className='blog-outer'>
            <h2 className='section-heading'>Latest News</h2>
            {console.log(newsData)}
            <div className='blogs'>
                <div className='blog-inner'>
                    <img src={img3} alt={img3} />
                    <span id='topic'>Electronics</span>
                    <span id='date'>Admin</span>
                    <span id='date'>January 16 2021</span>
                    <h4>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</h4>
                </div>

                <div className='blog-inner'>
                    <img src={img1} alt={img1} />
                    <span id='topic'>Electronics</span>
                    <span id='date'>Admin</span>
                    <span id='date'>January 16 2021</span>
                    <h4>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</h4>
                </div>

                <div className='blog-inner'>
                    <img src={img2} alt={img2} />
                    <span id='topic'>Electronics</span>
                    <span id='date'>Admin</span>
                    <span id='date'>January 16 2021</span>
                    <h4>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</h4>
                </div>
            </div>
        </div>
    )
}

export default Blogs 