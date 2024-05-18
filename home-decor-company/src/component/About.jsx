import './About.css'
import about from '../assets/about.jpg'
import play from '../assets/play-icon.png'
const About =({setPlayState})=>{
  return(
    <>
     <div className="about">
      <div className="about-left">
        <img src={about} className='about-img' alt="" />
        <img src={play} className='play-icon' alt="" onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
      <h3>ABOUT COMPANY</h3>
       <h2>Nurturing Dream Home by Designing Today </h2>
       <p>The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized, meaningful environment, not about fashion or what's in or what's out. This is not an easy job.</p>
       <p>If you want a golden rule that will fit everything, this is it: Have nothing in your houses that you do not know to be useful or believe to be beautiful.</p>
       <p>Luxury is when it seems flawless, when you reach the right balance between all elements. Understated theatricality  that is what my luxury is all about.</p>
      </div>
      
    
     </div>
    </>
  )
}

export default About;