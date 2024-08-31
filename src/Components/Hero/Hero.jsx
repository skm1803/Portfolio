import skm_image from "../../assets/skm_image.jpg"
import "./Hero.css"
const Hero = () => {
    return (
        <div className='hero'>
            <img src={skm_image} alt="SKM Image" />
            <h1><spna className='hero-name'>I'm Shubham Mishra ,</spna> frontend developer based in India.</h1>
            <p>I am a frontend developer from Mumbai, India with 4 Years of experience in multiple companies like Cognizant, Tata Consltancy Services and HigRadius</p>
            <div className='hero-action'>
                <div className='hero-connect'>Connect With Me</div>
                <div className='hero-resume'>Resume</div>

            </div>
        </div>
    )
}

export default Hero
