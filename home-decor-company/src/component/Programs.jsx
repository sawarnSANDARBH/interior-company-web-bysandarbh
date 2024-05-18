import './Programs.css'
import service1 from '../assets/service1.jpg'
import service2 from '../assets/service2.jpg'
import service3 from '../assets/service3.jpg'
import { MdOutlineSoupKitchen } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { GiOfficeChair } from "react-icons/gi";
const Programs=()=>{
  return(<>
<div id='design' className="programs">
  <div className="program">
    <img src={service1} alt="" />
    <div className="caption">
     <li><MdOutlineSoupKitchen /></li>
      <p>Kitchen Interior Work</p>
    </div>
  </div>

  <div className="program">
    <img src={service2} alt="" />
    <div className="caption">
      <li><GiOfficeChair /></li>
      <p>Office Interior Work</p>
    </div>
  </div>

  <div className="program">
    <img src={service3} alt="" />
    <div className="caption">
     <li><IoHome /></li>
      <p>Rooms Interior Work</p>
    </div>
  </div>
</div>

  </>)
}

export default Programs;