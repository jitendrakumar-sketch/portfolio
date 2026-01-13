import React,{useState,}from 'react'
import './Contact.css'
import theme_pattern from '../../assets/Theme_pattern.svg'
import mail_icon from '../../assets/Mail_icon.svg'
import location_icon from '../../assets/Location_icon.svg'
import call_icon from '../../assets/Call_icon.svg'
const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "df82f48d-4930-43cb-bd53-a000176aed26");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
        // setResult(data.success ? "Success!" : "Error");
        if (data.success) {
          setShowPopup(true);       // ✅ SHOW POPUP
          event.target.reset();    // optional
        }
        
      };

  return (
    <>
    <div id="contact" className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt=''/>
      </div>
      <div className="contact-section">
        <div className="contact-left">
             <h1>Let's talk</h1>
             <p>Seeking entry-level software development opportunities to learn, grow, and contribute to real-world projects.</p>
             <div className="contact-details">
                <div className="contact-detail"><img src={mail_icon} alt=''/><p>jk390806@gmail.com</p></div>
                <div className="contact-detail"><img src={call_icon} alt=''/><p>+91 7991969535</p></div>
                <div className="contact-detail"><img src={location_icon} alt=''/><p>Lucknow,India</p></div>
             </div>
        </div>
        <form onSubmit={onSubmit}className='contact-right'>
        <label htmlFor=''>Your Name</label>
        <input type='text' placeholder='Enter Your Name' name='name'/>
        <label htmlFor=''>Your Email</label>
        <input type='email' placeholder='Enter Your Email' name='email'/>
        <label htmlFor=''>Write your message here</label>
        <textarea name='message'  rows='8' placeholder='Enter your message'></textarea>
        <button type="submit" className='contact-submit'>Submit now</button>
      </form>
      </div>
     
    </div>
    {showPopup && (
      <div className="popup-overlay">
        <div className="popup">
          <h2>🎉 Message Sent!</h2>
          <p>Thank you for contacting me. I’ll get back to you soon.</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      </div>
    )}
    </>
  )
}

export default Contact
