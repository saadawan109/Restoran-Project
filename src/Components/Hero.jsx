import React from 'react'
import heroImg from '../assets/Images/hero-bg.jpg'
import HeroText from './HeroText'

const Hero = () => {
  return (
    <>
    
    <section className='hero' style={{backgroundImage:`URL(${heroImg})`}}>

        <HeroText />

        
    </section>
    </>
  )
}

export default Hero