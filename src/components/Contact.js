import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] p-4 flex justify-center items-center'>
    <form action='https://getform.io/f/raeggrva' method='POST' className='flex flex-col w-full max-w-[600px] '>
        <div className='pb-8'>
            <p className='inline text-4xl font-bold border-b-4 border-cyan-300 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>Submit the form below or shoot me an email on - abhyudayamisra25@gmail.com</p>
        </div>
        <input type='text' placeholder='Name' name='name' className='bg-[#ccd6f6] p-2'></input>
        <input type='email' placeholder='Email' name='email' className='bg-[#ccd6f6] p-2 my-4'></input>
        <textarea rows='10' name='message' className='bg-[#ccd6f6] p-2' placeholder='Message'></textarea>
        <button className='text-white px-4 py-3 my-8 mx-auto flex items-center border-2 hover:border-cyan-600 hover:bg-cyan-600'>Let's Collaborate</button>
    </form>
    </div>
  )
}

export default Contact