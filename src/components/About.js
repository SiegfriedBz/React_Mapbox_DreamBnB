import React, { useState } from 'react'
import "../styles/backg-image.css"
import Typed from 'react-typed';

const About = () => {

  return (
    <div className="backg-image" style={{height: "80vh"}}>

      <div className="container">

        <div className="d-flex flex-column justify-content-around" style={{height: "480px"}}>

          <h1 className='fs-1 fw-bolder text-white'>About</h1>

          <div className="d-flex flex-row justify-content-center">
            <Typed
              className='fs-3 fw-bolder text-white'
              strings={['Visit my GitHub page', "Contact me on LinkedIn", "This should be the Beginning :)"]}
              typeSpeed={40}
            />
          </div>
          <div className="d-flex flex-row justify-content-end">
            <Typed
              className='fs-3 fw-bolder text-white'
              strings={['Created with React']}
              typeSpeed={40}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
