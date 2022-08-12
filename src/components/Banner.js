import React, { useState } from 'react'
import Slider from 'react-slick'
import img1 from '../assets/images/banner7.jpg'
import img2 from '../assets/images/banner5.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'
import { useSpring, animated } from 'react-spring'

function Banner() {
  const [show, setShow] = useState(false)

  const slideChange = () => {
    setShow(true)
  }
  const beforeChange = () => {
    setShow(false)
  }

  const settings = {
    dots: true,
    // infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    cssEase: "linear",
    arrows: false,
    afterChange: slideChange,
    beforeChange: beforeChange
  };
  const props = useSpring({
    from: { transform: "translateX(0%)" },
    to: [
      { transform: "translateX(80%)" },
      { transform: "translateX(50%)" },

    ],
  })

  const paragraphStyle = useSpring({
    from: { opacity: 0, transform: "translateX(-0%)" },
    to: [
      { opacity: 1, transform: "translateX(-200%)" },
      { opacity: 1, transform: "translateX(-130%)" },
    ],
  })

  const buttonStyle = useSpring({
    from: { opacity: 0, transform: "translateY(-100%)" },
    to: [
      { opacity: 0, transform: "translateY(180%)" },
      { opacity: 1, transform: "translateY(50%)" },

    ],
  })
  return (
    <div className='banner'>
      <Slider {...settings}>

        <div className='banner-outer'>

          <img src={img3} alt={img3} />
          <span className='banner-text'>
            {show && <div>
              <animated.div style={paragraphStyle}>
                <p>We Professional dealers</p>
              </animated.div>
              <animated.div style={props}>
                <h4>Redefine Your World With 150mp camera</h4>
              </animated.div>
              <animated.div style={buttonStyle}>
                <button className='banner-button'>Shop Now</button>
              </animated.div>
            </div>
            }
          </span>

        </div>

        <div className='banner-outer'>
          <img src={img1} alt={img1} />
          <div className='banner-text'>
            {show && <div>
              <animated.div style={paragraphStyle}>
                <p>We Professional dealers</p>
              </animated.div>
              <animated.div style={props}>
                <h4>Redefine Your World With 150mp camera</h4>
              </animated.div>
              <animated.div style={buttonStyle}>
                <button className='banner-button'>Shop Now</button>
              </animated.div>
            </div>}

          </div>

        </div>
        <div className='banner-outer'>

          <img src={img2} alt={img2} />
          <span className='banner-text'>

            {/* { show && <animated.div style={props}>
              <h4>Redefine Your World With 150mp camera</h4>
            </animated.div>} */}

            {show && <div>
              <animated.div style={paragraphStyle}>
                <p>We Professional dealers</p>
              </animated.div>
              <animated.div style={props}>
                <h4>Redefine Your World With 150mp camera</h4>
              </animated.div>
              <animated.div style={buttonStyle}>
                <button className='banner-button'>Shop Now</button>
              </animated.div>
            </div>}


          </span>

        </div>

      </Slider>
    </div>
  )
}

export default Banner