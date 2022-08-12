import React from 'react'
import Slider from 'react-slick'
import bg1 from '../assets/images/img4.jpg'
import bg2 from '../assets/images/img3.jpg'
import bg3 from '../assets/images/carousel2.png'
import banner1 from '../assets/images/img3.jpg'
import banner2 from '../assets/images/img1.jpg'
import banner3 from '../assets/images/img4.jpg'

function MyBanner() {
    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        cssEase: "linear",
        arrows: false,
        // afterChange: slideChange,
        // beforeChange: beforeChange
    };
    return (
        <div className='my-banner'>
            <Slider {...settings}>
                <div>
                    <div className='my-banner-inner' style={{
                        'backgroundImage': `url(${bg1})`,
            
                    }}>
                        <div className='my-banner-text'>
                            <h3>Redefine your World with 150 mp camera</h3>
                            <p>Get Incredible deals up to 40% off</p>
                            <button>Shop now</button>
                        </div>
                    </div>

                </div>

                <div>
                    <div className='my-banner-inner' style={{
                        'backgroundImage': `url(${bg2})`,
                    }}>
                        <div className='my-banner-text'>
                            <h3>Redefine your World with 150 mp camera</h3>
                            <p>Get Incredible deals up to 40% off</p>
                            <button>Shop now</button>
                        </div>

                    </div>

                </div>

                <div>
                    <div className='my-banner-inner' style={{
                        'backgroundImage': `url(${bg3})`,
                    }}>
                        <div className='my-banner-text'>
                            <h3>Redefine your World with 150 mp camera</h3>
                            <p>Get Incredible deals up to 40% off</p>
                            <button>Shop now</button>
                        </div>

                    </div>

                </div>
            </Slider>
        </div>
    )
}

export default MyBanner