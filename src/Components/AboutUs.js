import React from 'react';
import Lottie from 'lottie-react';
import aboutus from '../Animations/aboutus.json'
import aboutus1 from '../Animations/aboutus1.json'
import aboutus2 from '../Animations/aboutus2.json'
import frontpage from '../Animations/frontpage.json'
import prize from '../Icons/prize.png'
import support from '../Icons/support.png'
import reach from '../Icons/reach.png'
import world from '../Icons/world.png'
import '../Css/AboutUs.css'

export default function AboutUs() {
    return (<>
        <div className="aboutus-container">
            <div className='heading-view'>About Us</div>
            <div className='aboutus-view'>
                <div className='animation-view'><Lottie animationData={aboutus2} loop autoplay speed={1.5} /></div>
                <div className='aboutus-left'>
                    <div className='aboutus-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia molestiae dolorum tempora ut accusamus cupiditate! Nesciunt tempora reiciendis libero voluptate!</div>
                    <div className='aboutus-card-view'>
                    <div className='aboutus-card'>
                        <img src={prize} alt="User Icon" className='prizeicon' />
                        <div className='content'>First On Field</div>
                    </div>
                    <div className='aboutus-card'>
                        <img src={reach} alt="User Icon" className='prizeicon' />
                        <div className='content'>Easy To Reach</div>
                    </div>
                    <div className='aboutus-card'>
                        <img src={world} alt="User Icon" className='prizeicon' />
                        <div className='content'>Worldwide Services</div>
                    </div>
                    <div className='aboutus-card'>
                        <img src={support} alt="User Icon" className='prizeicon' />
                        <div className='content'>24/7 Support</div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>)
}