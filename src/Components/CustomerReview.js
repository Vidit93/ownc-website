import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import avatar1 from '../Icons/avatar1.png'
import avatar from '../Icons/avatar.png'
import '../Css/CustomerReview.css'

const DemoCarousel = () => {

    const customArrowPrev = (onClickHandler, hasPrev, label) => {
        return (
            <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="custom-arrow custom-arrow-prev"
                aria-label="Previous"
            >
                <span>&#60;</span>
            </button>
        );
    };

    const customArrowNext = (onClickHandler, hasNext, label) => {
        return (
            <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="custom-arrow custom-arrow-next"
                aria-label="Next"
            >
                <span>&#62;</span>
            </button>
        );
    };

    return (<>
        <div className='review-container'>
            <div className='heading-view'>Customers Reviews</div>
            <Carousel showThumbs={false} interval={2000} showStatus={false} infiniteLoop={true} autoPlay={false} renderIndicator={null} renderArrowPrev={customArrowPrev}
                renderArrowNext={customArrowNext} className="custom-carousel">
                <div className='review-card'>
                    <div className='review-card-image'><img src={avatar1} /></div>
                    <div className="carousel-content">
                        I recently purchased a pair of running shoes from XYZ Sports. The quality is outstanding, and they provide excellent support during my workouts. Plus, the vibrant color options are a bonus! Highly recommend.
                    </div>
                </div>
                <div className='review-card'>
                    <div className='review-card-image'><img src={avatar} /></div>
                    <div className="carousel-content">
                        I recently purchased a pair of running shoes from XYZ Sports. The quality is outstanding, and they provide excellent support during my workouts. Plus, the vibrant color options are a bonus! Highly recommend.
                    </div>
                </div>
                <div className='review-card'>
                    <div className='review-card-image'><img src={avatar1} /></div>
                    <div className="carousel-content">
                        I recently purchased a pair of running shoes from XYZ Sports. The quality is outstanding, and they provide excellent support during my workouts. Plus, the vibrant color options are a bonus! Highly recommend.
                    </div>
                </div>
                <div className='review-card'>
                    <div className='review-card-image'><img src={avatar} /></div>
                    <div className="carousel-content">
                        I recently purchased a pair of running shoes from XYZ Sports. The quality is outstanding, and they provide excellent support during my workouts. Plus, the vibrant color options are a bonus! Highly recommend.
                    </div>
                </div>
                <div className='review-card'>
                    <div className='review-card-image'><img src={avatar1} /></div>
                    <div className="carousel-content">
                        I recently purchased a pair of running shoes from XYZ Sports. The quality is outstanding, and they provide excellent support during my workouts. Plus, the vibrant color options are a bonus! Highly recommend.
                    </div>
                </div>
                <div className='review-card'>
                    <div className='review-card-image'><img src={avatar} /></div>
                    <div className="carousel-content">
                        I recently purchased a pair of running shoes from XYZ Sports. The quality is outstanding, and they provide excellent support during my workouts. Plus, the vibrant color options are a bonus! Highly recommend.
                    </div>
                </div>
            </Carousel>
        </div>
    </>);
};

export default DemoCarousel;
