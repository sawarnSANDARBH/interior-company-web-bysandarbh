import './Contact.css'
import msgicon from '../assets/msg-icon.png'
import mailicon from '../assets/mail-icon.png'
import phnicon from '../assets/phone-icon.png'
import locicon from '../assets/location-icon.png'
import whtarw from '../assets/white-arrow.png'
import React from 'react'
const Contact =()=>{
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c8ea6ae8-befa-4ddf-9faa-8a36c5fbcb88");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return(
    <>
    <div className="contact">
      <div className="contact-col">
         <h3>Send us a message <img src={msgicon} alt="" /></h3>
         <p>Welcome to our company! We're so glad you're here,We're looking forward to working with you,We're committed to providing you with the best possible service</p>
         <ul>
          <li><img src={mailicon} alt="" />sawarn.sandarbh2309@gmail.com</li>
          <li><img src={phnicon} alt="" />8340303906</li>
          <li><img src={locicon} alt="" />North of chirtsen pokhar,Dumri Road Gobarsahi,Muzaffarpur 843142 , Bihar</li>
         </ul>
      </div>
      <div className="contact-col">
         <form onSubmit={onSubmit} >
             <label >Your name</label>
             <input type="text" name='name' placeholder='Enter your name' required/>
             <label >Phone Number</label>
             <input type="tel" name='phone' placeholder='Enter your mobile number' required />
             <label >Ask your Enquiry here</label>
             <textarea name="message" rows="6" placeholder='Enter your message' required ></textarea> 
             <button type='submit' className='dark-btn' >Submit now <img src={whtarw}  /></button>
         </form>
         <span>{result}</span>
      </div>
    </div>
    </>
  )
}

export default Contact;