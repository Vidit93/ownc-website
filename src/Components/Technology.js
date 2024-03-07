import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ai from '../Logos/ai.png';
import css from '../Logos/css.png';
import expressjs from '../Logos/expressjs.png';
import figma from '../Logos/figma.png';
import html from '../Logos/html.jpeg';
import js from '../Logos/js.png';
import mongodb from '../Logos/mongodb.png';
import native from '../Logos/native.png';
import nodejs from '../Logos/nodejs.png';
import react from '../Logos/react.png';
import '../Css/Technology.css';

const TechCarousel = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 1
        },
        laptop: {
            breakpoint: { max: 1040, min: 768 },
            items: 5,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 4,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
            slidesToSlide: 1
        }
    };

    return (
        <div className='tech-container'>
            <div className='heading-view'>Technologies We Use</div>
            <Carousel
                swipeable={["tablet", "mobile"]}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2500}
                keyBoardControl={true}
                customTransition="all .9"
                transitionDuration={900}
                itemClass="carouselItem"
                containerClass="custom-carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                <div className='img-view-ai'><img className='img' src={ai} /></div>
                <div className='img-view'><img className='img' src={css} /></div>
                <div className='img-view'><img className='img' src={html} /></div>
                <div className='img-view'><img className='img' src={js} /></div>
                <div className='img-view'><img className='img' src={mongodb} /></div>
                <div className='img-view'><img className='img' src={figma} /></div>
                <div className='img-view'><img className='img' src={expressjs} /></div>
                <div className='img-view'><img className='img' src={react} /></div>
                <div className='img-view'><img className='img' src={nodejs} /></div>
                <div className='img-view'><img className='img' src={native} /></div>
            </Carousel>
        </div>
    );
};
export default TechCarousel;
