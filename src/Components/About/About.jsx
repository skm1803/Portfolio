import React from 'react'
import './About.css'
import skm_image from "../../assets/about_image.jpg"
import background from "../../assets/download.svg"

function About() {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={background} alt="underline" />
            </div>
            <div className='about-sections'>
                <div className='about-left'>
                    <img src={skm_image} alt="about" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I'm am Exprience in web development and UI/UX with a demonstrated history of working in the computer software industry.</p>
                        <p>My passion for web development started back in 2010. Initially, I started with HTML and CSS. As I got more comfortable with it, I wanted to make my own version of it.</p>
                    </div>
                    <div className='about-skills'>
                        <div className="about-skill"><p>HTML &CSS</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "95%" }} /></div>
                        <div className="about-skill"><p>React</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>Tailwind</p><hr style={{ width: "55%" }} /></div>
                    </div>
                </div>

            </div>
            <div className="about-achivments">
                <div className="about-achivment">
                    <h1>5+</h1>
                    <p>Years OF EXPERINCE</p>
                </div>
                <hr />
                <div className="about-achivment">
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achivment">
                    <h1>4+</h1>
                    <p>AWARD WON</p>
                </div>
            </div>
        </div >
    )
}

export default About
