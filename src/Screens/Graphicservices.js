import '../Css/Graphicservices.css'
import graphic from '../Images/graphic.jpg'
import graphic1 from '../Images/graphic1.jpg'
import graphic2 from '../Images/graphic2.jpg'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
export default function Graphicservices() {
    return (<>
        {<Navbar />}
        <div className='graphicservice-container'>
            <div className='img-container'><img src={graphic} className='graphicimg' /></div>
            <div ><h1 className='heading1-view'>Graphic and Web Designing</h1></div>
            <div className='graphic-content-view'>
                <div className='intro-view'>At ownC, we're passionate about bringing creativity to life through stunning graphic designs and captivating website designs created on Figma. Our team of talented designers and strategists is dedicated to helping you visually communicate your brand's message and stand out in today's competitive landscape. Whether you're a startup looking to establish your brand identity or an established business aiming to refresh your visual presence, we have the expertise and tools to bring your vision to reality.</div>
            </div>
            <div className='offer-view'>
                <div className='offer-heading'>What we offer?</div>
                <div className='offer-content-view'>
                    <div className='offer-content-heading'>1. Custom Graphic Design:  </div>
                    <div className='offer-content'> From logo design to branding collateral, we specialize in creating visually impactful designs that resonate with your target audience. Our custom graphic design solutions are tailored to your brand's personality and values, helping you make a memorable impression in the minds of your customers.</div>
                </div>
                <div className='offer-content-view'>
                    <div className='offer-content-heading'>2. Print Design: </div>
                    <div className='offer-content'> Need eye-catching printed materials for your marketing campaigns or events? Our print design services cover everything from brochures and flyers to business cards and posters. We pay attention to every detail to ensure that your print materials not only look great but also effectively convey your message.</div>
                </div>
                <div className='offer-content-view'>
                    <div className='offer-content-heading'>3. Digital Design: </div>
                    <div className='offer-content'> In today's digital world, having compelling digital assets is crucial for engaging your audience online. Whether it's social media graphics, digital ads, or email newsletters, we create visually stunning designs that captivate your audience and drive results.</div>
                </div>
                <div className='offer-content-view'>
                    <div className='offer-content-heading'>4. Figma Website Design: </div>
                    <div className='offer-content'>Figma has revolutionized the way websites are designed, allowing for seamless collaboration and real-time feedback. Our team leverages the power of Figma to create intuitive and visually appealing website designs that prioritize user experience and conversion optimization. Whether you need a simple landing page or a complex e-commerce site, we'll bring your website vision to life on Figma.</div>
                </div>
            </div>
            <div className='choose-view'>
                <div className='choose-heading'>Why Choose Us:</div>
                <div className='choose-content-view'>
                    <div className='choose-content-heading'>1. Creativity: </div>
                    <div className='choose-content'>We're passionate about creativity and innovation, and it shows in our designs. From concept to execution, we strive to push the boundaries and deliver designs that exceed your expectations.</div>
                </div>
                <div className='choose-content-view'>
                    <div className='choose-content-heading'>2. Collaboration: </div>
                    <div className='choose-content'>We believe in collaboration every step of the way. Your input is invaluable, and we'll work closely with you to understand your goals and preferences, ensuring that the final design reflects your vision.</div>
                </div>
                <div className='choose-content-view'>
                    <div className='choose-content-heading'>3. Attention to Detail: </div>
                    <div className='choose-content'>We believe that the difference is in the details. Whether it's choosing the right color palette or perfecting the typography, we pay attention to every aspect of the design to ensure a polished and professional result.</div>
                </div>
                <div className='choose-content-view'>
                    <div className='choose-content-heading'>4. Timely Delivery: </div>
                    <div className='choose-content'>We understand the importance of deadlines, and we're committed to delivering your designs on time and within budget. You can count on us to keep the project on track and meet your expectations.</div>
                </div>
            </div>
            <div className='tagline'>Elevate your brand with captivating graphic designs and Figma website creations. Contact us now to discuss your project and captivate your audience visually!</div>
        </div>
        {<Footer />}
    </>)
}