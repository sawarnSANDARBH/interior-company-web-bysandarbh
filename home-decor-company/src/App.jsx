import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Programs from './component/Programs'
import Title from './component/Title'
import About from './component/About'
import Project from './component/Project'
import Testimonials from './component/Testimonials'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Videoplayer from './component/Videoplayer'
import './App.css'
import { useState } from 'react'

function App() {
  const[playState,setPlayState]=useState(false)

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      
      <div className="container">
        <Title subTitle='Our Service' title='What we offer'></Title>
      <Programs></Programs>
      <About setPlayState={setPlayState}></About>
      <Title subTitle='AIIMS Raebareli ' title='Our Project'></Title>
      <Project></Project>
      <Title subTitle='TESTIMONIALS' title=' Customer Reviews'></Title>
      <Testimonials></Testimonials>
      <Title subTitle='Contact Us' title=' Get in Touch'></Title>
      <Contact></Contact>
      <Footer></Footer>
      </div>
     <Videoplayer playState={playState} setPlayState={setPlayState} />
     </div>
    
  )
}

export default App;
