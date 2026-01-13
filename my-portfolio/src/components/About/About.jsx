import React from 'react'
import './About.css'
import theme_pattern from '../../assets/Theme_pattern.svg'
import profile_img from '../../assets/Profile-photo 2.png'
const About = () => {
  return (
    <div id='about' className='about'>
    <div className="about-title">
      <h1>About me</h1>
      <img src={theme_pattern} alt=''/>

    </div>
    <div className="about-sections">
      <div className="about-left">
          <img src = {profile_img} alt =''/> 
      </div>
      <div className="about-right">
          <div className="about-para">
              <p>I’m a MERN Stack Developer skilled in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js, with a strong focus on performance, scalability, and user experience.</p>
              <p>I build powerful full-stack applications using the MERN Stack, combining beautiful React interfaces with robust Node.js backends and scalable MongoDB databases to deliver real-world solutions.</p>
          </div>
          <div className="about-skills">
                          <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"50%"}}/></div>
                          <div className="about-skill"><p>React JS </p> <hr style={{width:"70%"}}/></div>
                          <div className="about-skill"><p>JavaScript</p> <hr style={{width:"60%"}}/></div>
                          <div className="about-skill"> <p>Next JS</p> <hr style={{width:"50%"}}/></div>
                          <div className="about-skill"><p>Express JS</p> <hr style={{width:"60%"}}/></div>
                          <div className="about-skill"> <p>Node JS</p> <hr style={{width:"50%"}}/></div>
                          <div className="about-skill"> <p>MongoDB JS</p> <hr style={{width:"52%"}}/></div>
                          <div className="about-skill"> <p>Ardunio Uno</p> <hr style={{width:"40%"}}/></div>
                          <div className="about-skill"> <p>MIT App Inventor</p> <hr style={{width:"55%"}}/> </div>
          </div>
      </div>
    </div>
    <div className="about-achievements">
      <div className="about-achievement">
          <h1>3+</h1><br/>
          <p>PROJECTS COMPLETED</p>
      </div>
      <hr/>
      <div className="about-achievement">
          <h1>🏆</h1><br/>
          <p>Strong Foundation in Modern Web Technologies</p>
      </div><hr/>
      <div className="about-achievement">
          <h1>🏆</h1><br/>
          <p>Consistent Learning & Problem Solving</p>
      </div>
      
    </div>
  </div>
)
}
export default About;
