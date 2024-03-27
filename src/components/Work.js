import React from 'react'
import Applevision from '../assets/applevision.png'
import netflix from '../assets/netlixclone.png'
import crypto from '../assets/crypto.png'

const Work = () => {
  return (
    <div name='work' className='text-gray-300 bg-[#0a192f] w-full md:h-screen' >
     <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full w-full'>

       <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-cyan-300 '>Work</p>
        <p className='py-6'>Check out some of my recent work</p>
       </div>

{/* container */}
    <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

      {/* card */}
        <div style={{backgroundImage:`url(${Applevision})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center content-div mx-auto'>
            {/* hover effects */  }
            
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl text-white font-bold tracking-wider'>
                   Apple Vision Website
                </span>
                <div className='pt-8 text-center'>
                <a href='https://applevisionbyabhyudaya.netlify.app/'>
                  <button className='text-center font-bold rounded-lg bg-white text-gray-700 text-lg m-2 px-4 py-3'>Demo</button>
                </a>
                    <a href='https://github.com/abhyudaya252/Apple-Vision-Clone'>
                  <button className='text-center font-bold rounded-lg bg-white text-gray-700 text-lg m-2 px-4 py-3'>Code</button>
                    </a>
                </div>
                
            </div>
        </div>

        <div style={{backgroundImage:`url(${netflix})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center content-div mx-auto'>
            {/* hover effects */  }
            
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl text-white font-bold tracking-wider'>
                   Netflix UI Clone
                </span>
                <div className='pt-8 text-center'>
                <a href=' https://netflixclone-project.vercel.app/'>
                  <button className='text-center font-bold rounded-lg bg-white text-gray-700 text-lg m-2 px-4 py-3'>Demo</button>
                </a>
                    <a href='https://github.com/abhyudaya252/netflixclone_project'>
                  <button className='text-center font-bold rounded-lg bg-white text-gray-700 text-lg m-2 px-4 py-3'>Code</button>
                    </a>
                </div>


                
                
            </div>
        </div>

        <div style={{backgroundImage:`url(${crypto})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center content-div mx-auto'>
            {/* hover effects */  }
            
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl text-white font-bold tracking-wider'>
                   Cryptocurrency Tracker
                </span>
                <div className='pt-8 text-center'>
                <a href='https://crypto-app-mu-six.vercel.app/'>
                  <button className='text-center font-bold rounded-lg bg-white text-gray-700 text-lg m-2 px-4 py-3'>Demo</button>
                </a>
                    <a href='https://github.com/abhyudaya252/Cryptocurrency-App'>
                  <button className='text-center font-bold rounded-lg bg-white text-gray-700 text-lg m-2 px-4 py-3'>Code</button>
                    </a>
                </div>


                
                
            </div>
        </div>

    </div>


     </div>
    </div>
  )
}

export default Work
