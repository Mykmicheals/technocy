import React, { useState } from 'react'
import Slider from "react-slick";
import bg1 from '../assets/images/bg-1.png'
import bg2 from '../assets/images/bg-2.png'


function Banner() {
  const [animate, setAnimate] = useState(false)
  const [slideOut, setOut] = useState(false)
  const swipeHandler = () => {
    setAnimate(true)
  }
  const falseSwipeHandler = () => {
    // setOut(true)
    setAnimate(false)
  }
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    fade: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    afterChange: swipeHandler,
    onInit: swipeHandler,
    beforeChange: falseSwipeHandler
  };
  return (

    <div className='hero-section'>
      <div className='slider-section'>
        <Slider {...settings}>
          <div className='slider-each slider1'>
            <div>
              <img className='slider-image' src={bg1} />
           </div>
            <div className='slider-word'>
              {animate && <h3 className='animate-hero-h'>Redefine your world with 150mp camera</h3>}

              {animate && <p className='animate-hero-p'>Get Incredible deals with up to 40%</p>}
            </div>
          </div>

          <div className='slider-each slider2'>
            <div >
              <img className='slider-image' src={bg2} />
            </div>
            <div className='slider-word'>
              {animate && <h3 className='animate-hero-h'>Redefine your world with 150mp camera</h3>}

              {animate && <p className='animate-hero-p'>Get Incredible deals with up to 40%</p>}
            </div>
          </div>

          {/* <div className='slider-each slider-image2'>
            <div className='slider-image'>
              <img src={bg2} />
            </div>
            <div className='slider-word'>
              {animate && <h3 className={animate ? 'animate-hero-h' : 'animate-outer'}>Delivering Excellence</h3>}
              {animate && <p className='animate-hero-p'>Buy for as low as N50,000</p>}
            </div>
          </div> */}
        </Slider>
      </div>
    </div>


  )
}

export default Banner