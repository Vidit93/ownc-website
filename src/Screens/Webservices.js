import '../Css/Webservices.css'
import web from '../Images/web.jpg'
import web1 from '../Images/web1.png'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
export default function Webservices() {
    return (<>
        {/* {<Navbar />} */}
        <div className='webservice-container'>
            <div className='img-container'><img src={web} className='webimg' /></div>
            <div ><h1 className='heading1-view'>Web Development</h1></div>
            <div className='web-content-view'>
                <div className='intro-view'>At ownC, we craft digital experiences that leave a lasting impression. Our team of expert developers, designers, and strategists work tirelessly to bring your vision to life. Whether you're a startup looking to make your mark or an established business aiming to expand your online presence, we have the tools and expertise to help you succeed.</div>
            </div>
            <div className='offer-view'>
                <div className='offer-heading'>What we offer?</div>
                <div className='offer-content-view'>
                    <div className='offer-content-heading'>1. Custom Web Development: </div>
                    <div className='offer-content'> From simple landing pages to complex web applications, we specialize in creating tailored solutions that meet your unique business needs. Our development process is collaborative, ensuring that your website not only looks great but also functions seamlessly across all devices</div>
                </div>
                <div className='offer-content-view'>
                    <div className='offer-content-heading'>2. Responsive Design: </div>
                    <div className='offer-content'> In today's digital landscape, it's essential that your website looks and performs flawlessly on any device. Our team employs responsive design techniques to ensure that your site adapts to various screen sizes, providing an optimal viewing experience for your visitors.</div>
                </div>
                <div className='offer-content-view'>
                    <div className='offer-content-heading'>3. E-commerce Solutions: </div>
                    <div className='offer-content'>  Ready to take your online store to the next level? We offer comprehensive e-commerce solutions that enable you to sell your products or services efficiently and securely. From inventory management to payment processing, we've got you covered.</div>
                </div>
                <div className='offer-content-view'>
                    <div className='offer-content-heading'>4. Content Management Systems (CMS): </div>
                    <div className='offer-content'> Take control of your website with our user-friendly content management systems. Whether you're updating blog posts, adding new products, or managing customer inquiries, our CMS solutions make it easy to keep your site fresh and engaging.</div>
                </div>
                <div className='offer-content-view'>
                    <div className='offer-content-heading'>5. SEO Optimization: </div>
                    <div className='offer-content'>  Building a beautiful website is just the first step. Our team incorporates SEO best practices into every project to ensure that your site ranks well in search engine results. From keyword research to on-page optimization, we'll help you attract more organic traffic and grow your online presence.</div>
                </div>
            </div>
            <div className='choose-view'>
                <div className='choose-heading'>Why Choose Us:</div>
                <div className='choose-content-view'>
                    <div className='choose-content-heading'>1. Experience: </div>
                    <div className='choose-content'>With years of experience in the industry, we have the knowledge and expertise to deliver exceptional results on every project.</div>
                </div>
                <div className='choose-content-view'>
                    <div className='choose-content-heading'>2. Collaboration: </div>
                    <div className='choose-content'>We believe in working closely with our clients to understand their goals and objectives. Your input is invaluable, and we'll keep you involved every step of the way.</div>
                </div>
                <div className='choose-content-view'>
                    <div className='choose-content-heading'>3. Quality Assurance: </div>
                    <div className='choose-content'>Our commitment to quality is unwavering. We conduct rigorous testing to ensure that your website is bug-free, secure, and optimized for performance.</div>
                </div>
                <div className='choose-content-view'>
                    <div className='choose-content-heading'>4. Customer Satisfaction: </div>
                    <div className='choose-content'>Your satisfaction is our top priority. We're not satisfied until you're thrilled with the final product.</div>
                </div>
            </div>
            <div className='tagline'>Ready to take your online presence to the next level? Contact us today to get started!</div>
        </div>
        {/* {<Footer />} */}
    </>)
}