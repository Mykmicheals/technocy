import React from 'react'
import bannerImg from '../assets/images/banner2.jpg'
import map from '../assets/images/map.png'


function About() {
    return (
        <div className='about-page'>
            <div className='about-hero'>
                <img src={bannerImg} />
                <h2 className='about-banner-head'>The First Preference for Latest in Electronics</h2>
            </div>
            <div className='map-section'>
                <img src={map} />
                <div className='map-section-right'>
                    <h3>You buy, We deliver</h3>  
                    <p>We have been asked how we’ve grown so quickly, the answer is simple. We have positioned the organization in providing the best and cheapest products and to provide the best customer service possible through technology. Internally, we call this our Supercalifragilisticexpialidocious philosophy.</p>
                </div>
            </div>
        </div>
    )
}

export default About