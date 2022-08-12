import React from 'react'
import bannerImg from '../assets/images/banner2.jpg'
import quality from '../assets/images/banner3.jpg'
import { Icon } from '@iconify/react';
import map from '../assets/images/map.png'
import cusotomerService from '../assets/images/customer.png'
import road from '../assets/images/road.png'


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

            <div className='third-section'>
                <h3>What makes us different</h3>
                <p>We also provide after-sales support to our customers, understanding the intricacies and challenges that may arise due to manufacturers’ defects or the difficulty of usage of products obtained from Itech</p>
            </div>

            <div className='third-section-grid'>
                <div className='third-section-grid-each'>
                    <img src={cusotomerService} />
                    <h4>customer Service</h4>
                    <p>Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur.</p>
                </div>

                <div className='third-section-grid-each'>
                    <img src={quality} />
                    <h4>Product Quality</h4>
                    <p>Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur.</p>
                </div>

                <div className='third-section-grid-each'>
                    <img src={road} />
                    <h4>Distribution Network</h4>
                    <p>Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur.</p>
                </div>
            </div>
            <div className='testimonial'>
                <h3>What Client Says</h3>
                <ul>
                    <li>
                        <h4>"Highly Recommended"</h4>
                        <div className='stars'>
                            <i><Icon icon="emojione:star" inline={true} /></i>
                            <i><Icon icon="emojione:star" inline={true} /></i>
                            <i><Icon icon="emojione:star" inline={true} /></i>
                            <i><Icon icon="emojione:star" inline={true} /></i>
                            <i><Icon icon="emojione:star" inline={true} /></i>
                        </div>
                        <p>
                            We also provide after-sales support to our customers, understanding the intricacies and challenges that may arise due to manufacturers’ defects or the difficulty of usage of products obtained from Itech
                        </p>
                    </li>

                    <li>
                        <h4>"Highly Recommended"</h4>
                        <div className='stars'>
                            <i><Icon icon="emojione:star" inline={true} /></i>
                            <i><Icon icon="emojione:star" inline={true} /></i>
                            <i><Icon icon="emojione:star" inline={true} /></i>
                            <i><Icon icon="emojione:star" inline={true} /></i>
                            <i><Icon icon="emojione:star" inline={true} /></i>
                        </div>
                        <p>
                            We also provide after-sales support to our customers, understanding the intricacies and challenges that may arise due to manufacturers’ defects or the difficulty of usage of products obtained from Itech
                        </p>
                    </li>

                    <li>
                        <h4>"Highly Recommended"</h4>
                        <div className='stars'>
                            <i><Icon icon="emojione:star" inline={true} /></i>
                            <i><Icon icon="emojione:star" inline={true} /></i>
                            <i><Icon icon="emojione:star" inline={true} /></i>
                            <i><Icon icon="emojione:star" inline={true} /></i>
                            <i><Icon icon="emojione:star" inline={true} /></i>
                        </div>
                        <p>
                            We also provide after-sales support to our customers, understanding the intricacies and challenges that may arise due to manufacturers’ defects or the difficulty of usage of products obtained from Itech
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About