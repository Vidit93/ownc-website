import React, { useState, useEffect,useRef } from 'react';
import '../Css/Landingpage.css'
import Lottie from 'lottie-react';
import animation2 from '../Animations/animation2.json'
import animation1 from '../Animations/animation1.json'
import Typed from 'typed.js';

export default function Landingpage() {

     function Typewriter() {
        const el = useRef(null);
      
        useEffect(() => {
          let typed = new Typed(el.current, {
            strings: ['Web Developer','App Developer', 'Designer', 'Video Editor', 'Content Writer'],
            typeSpeed: 90,
            backSpeed: 50,
            loop: true,
          });
      
          return () => {
            typed.destroy();
            typed = null; 
          };
        }, []);
      
        return (
          <div className="App">
            <span ref={el} />
          </div>
        );
      }
    return (<>
        <div className='landingpage-container'>
            <div className='conatiner-left'>
                <div className='heading-view'>
                    <div className='heading-content'>
                    <div className='content-top'>We are</div> 
                    <div className='content-bottom'>{Typewriter()}</div>
                    </div>
                </div>
                <div className='sub-heading-view'>
                    <div className='sub-heading-content'>Elevate your online presence with our all-in-one solution suite. Offering top-tier services in web and app development, stunning design, polished video editing, and engaging content creation, we're your one-stop destination for digital success.</div>
                </div>
            </div>
            <div className='animation-view'><Lottie animationData={animation1} loop autoplay speed={1.5} /></div>
        </div>
        
    </>)
}


