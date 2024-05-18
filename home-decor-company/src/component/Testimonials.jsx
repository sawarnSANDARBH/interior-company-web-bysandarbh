import './Testimonials.css';
import nxticon from '../assets/next-icon.png'
import bckicon from '../assets/back-icon.png'
import user1 from '../assets/user-1.png'
import user2 from '../assets/user-2.png'
import user3 from '../assets/user-3.png'
import kol from '../assets/kol.jpg'
import { useRef } from 'react';
const Testimonials=()=>{
  const slider = useRef();
  let tx =0;
  const slideForward=()=>{
     if(tx > -50){
       tx -= 25;
     }
     slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackward=()=>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  } 

  return(
    <>
    <div className="testimonials">
      <img src={nxticon} alt="" className='next-btn' onClick={slideForward} />
      <img src={bckicon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={kol} alt="" />
                <div>
                  <h3>SANDARBH</h3>
                  <span>IT Engineer</span>
                </div>
              </div>
              <p>My experience with Interior Design Company was a bit mixed. While the end result was satisfactory, I encountered some issues with project management and delays. However, the designers were receptive to my feedback and worked hard to address the issues.</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div>
                  <h3>Nishant Kumar</h3>
                  <span>Doctor,India</span>
                </div>
              </div>
              <p>I highly recommend Interior Design Company! From the initial consultation to the final reveal, they provided top-notch service. Their team was professional, courteous, and incredibly skilled. They transformed my space into something truly spectacular. Thank you!</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3>Aditi</h3>
                  <span>Pune,India</span>
                </div>
              </div>
              <p>Overall, I had a great experience working with Interior Design Company. The designers were talented and receptive to my ideas. The project was completed on time, and the final result exceeded my expectations. However, there were a few minor communication hiccups along the way</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
                <div>
                  <h3>Sonali</h3>
                  <span>Kolkata,India</span>
                </div>
              </div>
              <p>Working with Interior Design Company was an absolute pleasure! Their team was not only talented but also passionate about their work. They listened to my needs and preferences and delivered a design that perfectly suited my style. I couldn't be happier with the outcome. Highly recommended</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Testimonials;