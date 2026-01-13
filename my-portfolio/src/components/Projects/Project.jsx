import React from 'react'
import './Project.css'
import theme_pattern from '../../assets/Theme_pattern.svg'
import mywork_data from '../../assets/Mywork_data'
import arrow_icon from '../../assets/Arrow_icon.svg'
const Project = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1> Projects</h1>
        <img src={theme_pattern} alt='' />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          // return <img key={index} src={work.w_img} alt=''/>
          return <div key={index} className="mywork-item">
            <img src={work.w_img} alt={work.w_name} />
            <p className="mywork-title1">{work.w_name}</p>
          </div>
        })}
      </div>
      <div className="mywork-showmore" onClick={() => window.open("https://fool-del-frontend.onrender.com/", "_blank")}>
        <p>Show More</p>
        <img src={arrow_icon} alt='' />
      </div>

    </div>
  )
}

export default Project
