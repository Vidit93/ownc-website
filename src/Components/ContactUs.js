// ContactUs.jsx
import React from 'react';
import '../Css/ContactUs.css';
import mailicon from '../Icons/gmail.png';
import whatsappicon from '../Icons/whatsapp.png';

export default function ContactUs() {
    const EmailAddress = 'shubhamsaharan04@gmail.com';
    const PhoneNumber = '7976754356';
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
    };
    return (
        <>
            <div className='Container'>
                <div className='top-view'>
                    {/* <img src={Image} alt="Image" /> */}
                    <h1>Contact Us</h1>
                </div>

                <div className='middle-view'>
                    <h1>Contact According to Your Need</h1>
                    <div className='contact-box'>
                        <div className='cards'>
                            <h2>Developer</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div className='gamil'>
                                <img src={mailicon} alt='gmail' />
                                <div className='contact-info'>
                                    <p>Gmail:</p>
                                    <a href={`mailto:${EmailAddress}`}>{EmailAddress}</a>
                                </div>
                            </div>
                            <div className='whatsapp'>
                                <img src={whatsappicon} alt='whatsapp' />
                                <div className='contact-info'>
                                    <p>Whatsapp:</p>
                                    <a href={`https://wa.me/${PhoneNumber}`}>{PhoneNumber}</a>
                                </div>
                            </div>
                        </div>

                        <div className='cards'>
                            <h2>Developer</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div className='gamil'>
                                <img src={mailicon} alt='gmail' />
                                <div className='contact-info'>
                                    <p>Gmail:</p>
                                    <a href={`mailto:${EmailAddress}`}>{EmailAddress}</a>
                                </div>
                            </div>
                            <div className='whatsapp'>
                                <img src={whatsappicon} alt='whatsapp' />
                                <div className='contact-info'>
                                    <p>Whatsapp:</p>
                                    <a href={`https://wa.me/${PhoneNumber}`}>{PhoneNumber}</a>
                                </div>
                            </div>
                        </div>

                        <div className='cards'>
                            <h2>Developer</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div className='gamil'>
                                <img src={mailicon} alt='gmail' />
                                <div className='contact-info'>
                                    <p>Gmail:</p>
                                    <a href={`mailto:${EmailAddress}`}>{EmailAddress}</a>
                                </div>
                            </div>
                            <div className='whatsapp'>
                                <img src={whatsappicon} alt='whatsapp' />
                                <div className='contact-info'>
                                    <p>Whatsapp:</p>
                                    <a href={`https://wa.me/${PhoneNumber}`}>{PhoneNumber}</a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className='bottom-view'>
                    <div className="map-container">
                        <iframe
                            title="Google Maps Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.820897755511!2d75.8199374742436!3d26.781978476725385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9763e6030f1%3A0x4137675e5cf54360!2sJECRC%20Foundation!5e0!3m2!1sen!2sin!4v1709668891107!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            ></iframe>
                    </div>
                    <div className='contact-form-container'>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <textarea name="message" placeholder="Your Message" rows="5" required />
                            </div>
                            <button type="submit" className="submit-button">Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
}
