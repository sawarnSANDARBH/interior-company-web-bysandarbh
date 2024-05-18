import '../component/Hero.css'
import darw from '../assets/dark-arrow.png'
const Hero =()=>{
  return(<>
    <div className='hero container' >
      <div className='hero-text'>
        <h1>We Ensure Best Interior for a fabulous Home </h1>
        <p>Be faithful to your own taste, because nothing you really like is ever out of style,The essence of interior design will always be about people and how they live</p>
        <button className='btn'>Explore more
        <img src={darw} alt="arrow" />
        </button>
      </div>
    </div>
  </>)
}

export default Hero;