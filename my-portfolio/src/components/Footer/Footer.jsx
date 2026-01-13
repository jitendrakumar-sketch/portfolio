import React ,{useState}from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo_2_3kb.png'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubscribe = () => {
      // Scroll to contact section
      const contact = document.getElementById("contact");
      if (contact) {
        contact.scrollIntoView({ behavior: "smooth" });
      }
  
      // Reset email input
      setEmail("");
    };
  return (
    <div className='footer'>
    <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_logo} alt=""/>
            <p> Aspiring full-stack developer seeking opportunities to learn, grow, and contribute to impactful software solutions. </p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt=''/>
                <input type="email" placeholder='"Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="footer-subscribe"  onClick={handleSubscribe} style={{ cursor: "pointer" }}>Subscribe</div>
        </div>
    </div>
    <hr/>
    <div className="footer-bottom">
        <p className="footer-bottom-left">@ 2026 Jitu Dev.All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
    </div>
</div>
  )
}

export default Footer
