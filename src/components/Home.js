import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>

{/*container */}

<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
<p className='text-cyan-300'>Hi, my name is</p>
<h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Abhyudaya Misra</h1>
<h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front End Developer</h2>
<p className='text-[#8892b0] py-4 max-w-[700px]'>"Passionate frontend developer with a flair for crafting elegant and intuitive user interfaces. Proficient in HTML, CSS, JavaScript, Tailwind CSS, and React. Constantly learning and exploring new technologies to create engaging web experiences."
</p>
<div>
  
    <button className='text-white border-2 px-6 py-3 my-2 flex items-center group hover:bg-cyan-600 hover:border-cyan-600 '> 
    <Link to='work' smooth={true} duration={500}>
    View Work
    </Link>
    <span className='group-hover:rotate-90 duration-300'> <HiArrowNarrowRight  className='ml-3' /></span>
    
     </button>
    
  
  </div>


</div>
    </div>
  )
}

export default Home