import './Navbar.css'
import logo from '../assets/logo.jpg'
import mnuicon from '../assets/menu-icon.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
const Navbar=()=>{
  const [sticky,setSticky] = useState(!true);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 500 ? setSticky(true) : setSticky(false) ;
    })
  },[])
   
const [mobileMenu,setMobileMenu]   = useState(false)

  const toggleMenu = ()=>{
    mobileMenu?setMobileMenu(false) : setMobileMenu(true);
  }
  return(<>
     <nav className={`container ${sticky?'dark-nav':''} `}>
      <img src={logo} className='logo' alt="logo" /> 
      <br/>
      <h1>THE HOME STUDIO</h1>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='projects' smooth={true} offset={-260} duration={500}>Projects</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='design' smooth={true} offset={-260} duration={500}>Designs</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link> </li>
      </ul>
      <img src={mnuicon} alt="" className='menu-icon' onClick={toggleMenu} />
     </nav>
  
  </>

  )
}

export default Navbar;