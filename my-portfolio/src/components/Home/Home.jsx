import React, {useState,useEffect}from 'react'
import './Home.css'
import profile_img1 from '../../assets/profile-circle2.png'
import profile_img2 from'../../assets/profile-gifi.png'
const Home = () => {
  const images = [profile_img1,profile_img2];
  const[currentIndex,setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // change every 2 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);
  return (
    <div id="home" className="hero">
      <img src={images[currentIndex]} alt="Profile" className="hero-profile-img" />
      <h1> <span>Hi, I’m Jitendra Kumar 👋,</span>Full Stack Developer | React.js Enthusiast</h1>
      <p>I am a full stack developer with having hand on expertise in the MERN Stack by create multiple projects</p>
      <div className="hero-action">
        <div className="hero-connect" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Connect with me</div>
        <div className="hero-resume" onClick={() => window.open("https://drive.google.com/file/d/1phcftfDE0j_b7bsINmby94_q_4yKBr2h/view?usp=sharing", "_blank")}>My Resume</div>

      </div>
    </div>
  )
}
 

export default Home
