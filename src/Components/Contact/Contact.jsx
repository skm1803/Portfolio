import React from 'react'
import './contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'
function Contact() {
    return (
        <div className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="underline" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>
                        I’m currently looking for new opportunities, my inbox is always
                        open. Whether you have a question or just want to say hi, I’ll try
                        my best to get back to you!
                    </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="mail" />
                            <p>itsmekumar.mishra@outlook.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="call" />
                            <p>+91 9876543210</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="location" />
                            <p>Mumbai, India</p>
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <form>
                        <label htmlFor="">Your Name</label>
                        <input type="text" placeholder="Enter Your Name" name='name' />
                        <label htmlFor="">Your Email</label>
                        <input type="email" placeholder="Enter Your Email" name='email' />
                        <label htmlFor="">Write Your Message</label>
                        <textarea name="message" rows="8" placeholder="Enter Your Message"></textarea>
                        <button type='submit' className='contact-submit'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact
