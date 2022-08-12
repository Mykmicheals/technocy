import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';

function Footer() {
  return (
    <Fragment>
      <div className='newsletter'>
        <span className='newsletter-span'>
          <h3>Fear Of Missing Out?</h3>
          <p id='p-1'>Our best promotions sent to your inbox.</p>
        </span>

        <span className='newsletter-span'>
          <input placeholder='Your Email Address' />
          <button className='newsletter-button'>Subscribe</button>
        </span>
        <span className='follow-us'>
          <span>Follow Us</span>
          <i><Icon icon="et:facebook" inline={true} /></i>
          <i><Icon icon="et:twitter" inline={true} /></i>
          <i><Icon icon="bxl:instagram" inline={true} /></i>
        </span>

      </div>
      <div className='footer'>
        <div className='footer-grid'>
          <h3>COMPANY</h3>
          <Link to='/about'><p>About us</p></Link>
          <Link to='/about'><p>Careers</p></Link>
          <Link to='#'><p>Affiliates</p></Link>
          <Link to='/blog'><p>Blog</p></Link>
          <Link to='/contact'><p>Contact Us</p></Link>
        </div>

        <div className='footer-grid'>
          <h3>Shops</h3>
          <Link to='/about'><p>Phones</p></Link>
          <Link to='/about'><p>Laptops</p></Link>
          <Link to='#'><p>Televisions</p></Link>
          <Link to='/blog'><p>Gadgets</p></Link>
          <Link to='/contact'><p>Fans</p></Link>
        </div>

        <div className='footer-grid'>
          <h3>Contact Us</h3>
          <Link to='/about'><p>About us</p></Link>
          <Link to='/about'><p>Careers</p></Link>
          <Link to='#'><p>Affiliates</p></Link>
          <Link to='/blog'><p>Blog</p></Link>
          <Link to='/contact'><p>Contact Us</p></Link>
        </div>

        <div className='footer-grid'>
          <h3>My Account</h3>
          <Link to='/about'><p>My Profile</p></Link>
          <Link to='/about'><p>Cart</p></Link>
          <Link to='#'><p>Login</p></Link>
          <Link to='/blog'><p>Logout</p></Link>

        </div>
      </div>
    </Fragment>
  )
}

export default Footer