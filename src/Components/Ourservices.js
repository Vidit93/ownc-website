import React from 'react';
import { useNavigate } from "react-router-dom"
import '../Css/Ourservices.css'
import app from '../Icons/app.png'
import app1 from '../Icons/app1.png'
import arrow from '../Icons/arrow.png'
import design from '../Icons/design.png'
import web from '../Icons/web.png'
import web1 from '../Icons/web1.png'
import content from '../Icons/content.png'
import video from '../Icons/video.png'
import video1 from '../Icons/video1.png'
export default function Ourservices() {

    // const history = useHistory();
    const navigate = useNavigate()

    function Webservices() {
        navigate(`/webservices`)
    }
    function Appservices() {
        navigate(`/appservices`)
    }
    function Videoservices() {
        navigate(`/videoservices`)
    }
    function Graphicservices() {
        navigate(`/graphicservices`)
    }
    function Contentservices() {
        navigate(`/contentservices`)
    }
    return (
        <div className='services-container'>
            <div ><h1 className='heading-view'>Our Services</h1></div>
            <div className='ourservices-view'>
                <div className='ourservices-card-view'>
                    <img src={app} alt="User Icon" className='appdevicon' />
                    <h2>App Development</h2>
                    <div className='services-content'>
                        Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Omnis
                        Id Atque Dignissimos Repellat Quae Ullam.
                    </div>
                    <div className='readmore-view' onClick={()=>Appservices()}>
                        <div className='readmore'>Read More</div>
                        <img src={arrow} alt="User Icon" className='arrowicon' />
                    </div>
                </div>
                <div className='ourservices-card-view'>
                    <img src={web1} alt="User Icon" className='appicon' />
                    <h2>Web Development</h2>
                    <div className='services-content'>
                        Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Omnis
                        Id Atque Dignissimos Repellat Quae Ullam.
                    </div>
                    <div className='readmore-view' onClick={Webservices}>
                        <div className='readmore'>Read More</div>
                        <img src={arrow} alt="User Icon" className='arrowicon' />
                    </div>
                </div>
                <div className='ourservices-card-view'>
                    <img src={design} alt="User Icon" className='appicon' />
                    <h2>Graphic Designing</h2>
                    <div className='services-content'>
                        Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Omnis
                        Id Atque Dignissimos Repellat Quae Ullam.
                    </div>
                    <div className='readmore-view' onClick={Graphicservices}>
                        <div className='readmore'>Read More</div>
                        <img src={arrow} alt="User Icon" className='arrowicon' />
                    </div>
                </div>
                <div className='ourservices-card-view'>
                    <img src={content} alt="User Icon" className='appicon' />
                    <h2>Content Writing</h2>
                    <div className='services-content'>
                        Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Omnis
                        Id Atque Dignissimos Repellat Quae Ullam.
                    </div>
                    <div className='readmore-view' onClick={Contentservices}>
                        <div className='readmore'>Read More</div>
                        <img src={arrow} alt="User Icon" className='arrowicon' />
                    </div>
                </div>
                <div className='ourservices-card-view'>
                    <img src={video1} alt="User Icon" className='appicon' />
                    <h2>Video Editing</h2>
                    <div className='services-content'>
                        Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Omnis
                        Id Atque Dignissimos Repellat Quae Ullam.
                    </div>
                    <div className='readmore-view' onClick={Videoservices}>
                        <div className='readmore'>Read More</div>
                        <img src={arrow} alt="User Icon" className='arrowicon' />
                    </div>
                </div>
            </div>
        </div>
    );
}