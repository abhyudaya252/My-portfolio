import React from 'react'

const About = () => {
  return (
    <div name='about' className='h-screen w-full bg-[#0a192f] text-gray-300 '>
      <div className='h-full w-full flex flex-col items-center justify-center'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-cyan-300'>About</p>
            </div>
            <div> </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='sm:text-right text-4xl font-bold pl-4'>
                <p>Hi. I am Abhyudaya, Nice to meet you. Please take a look around.</p>
              </div>
              <div className='pl-4'>
                <p >I'm a frontend developer with a passion for crafting engaging and dynamic user experiences. With skills in HTML, CSS, JavaScript, Tailwind CSS, and React, I bring ideas to life on the digital canvas. Let's build something remarkable together!</p>
              </div>
            </div>
        </div>
      </div>
    
  )
} 

export default About  