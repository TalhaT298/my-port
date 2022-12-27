import React from 'react'
import about from '../../../assets/images/myphoto.png'
import bg from '../../../assets/images/bg-shape.png'

const AboutMe = () => {
  return (
    <div id='about' className="hero mt-20">
      <div className="hero-content flex-col lg:flex-row w-full justify-between">
        <div data-aos="fade-right" className='mt-8'>
          <img src={bg} alt="talha" className="max-w-sm relative" />
          <img src={about} alt="talha" className="max-w-sm scale-90 absolute bottom-[13px] overflow-hidden -translate-x-[12%]" />
        </div>
        <div className='lg:w-1/2' data-aos="fade-left">
          <h1 className="text-xl font-bold">About Me</h1>
          <p className="py-6">A Junior Front-End Developer with experience in React.js, NodeJs, JavaScript, HTML5, CSS3, Bootstrap, Tailwind, DaisyUI, Firebase, and MongoDB.Also my soft skills are communication, Problem-Solving, Critical Thinking, Teamwork, and Leadership.

          </p>
          <a href='https://drive.google.com/file/d/1w5MaZylF7luKSeOtf83VwqUjHOpnT4Ag/view?usp=share_link' target="_blank" rel="noreferrer">
            <button className='btn btn-primary btn-sm rounded-sm text-white normal-case'>Curriculum Vitae</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutMe