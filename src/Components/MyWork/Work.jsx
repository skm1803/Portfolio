import React from 'react'
import './Work.css'
import background from '../../assets/download.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
function Work() {
    return (
        <div className='mywork'>

            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={background} alt="underline" />
            </div>
            <div className="mywork-container">

                {
                    mywork_data.map((data, index) => {
                        return (
                            <img src={data.w_img} alt="project" key={index} />
                        )
                    })
                }
            </div>
            <div className="mywork_showmore">
                <p>Show more</p>
                <img src={arrow_icon} alt="arrow" />
            </div>
        </div>
    )
}

export default Work
