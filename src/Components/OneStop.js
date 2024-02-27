import React from 'react';
import Lottie from 'lottie-react';
import '../Css/OneStop.css'
import animation2 from '../Animations/animation2.json'
export default function OneStop() {
    return (<>
        <div className="onestop-container">
            <div className='heading-view'>How OneStop</div>
            <div className='onestop-view'>
                <div className='animation-view'><Lottie animationData={animation2} loop autoplay speed={1.5} /></div>
                <div className='onestop-content-view'>
                    <div className='para-content'>We're your one-stop destination for all things digital. From app and web development to design, content creation, and video editing, we've got the expertise to meet your needs. With our talented team, expect top-quality service and seamless solutions to elevate your online presence.</div>
                    <div className='point-content-view'>
                        <div className='number'>01.</div>
                        <div className='point-content'>Latest Technologies</div>
                    </div>
                    <div className='point-content-view'>
                        <div className='number'>02.</div>
                        <div className='point-content'>Powerful Strategies</div>
                    </div>
                    <div className='point-content-view'>
                        <div className='number'>03.</div>
                        <div className='point-content'>Unique Solutions</div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}