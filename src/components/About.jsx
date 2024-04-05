import React from 'react'
import mobileR from '../assets/mobileR.png'
import notebookM from '../assets/notebookM.png'


const About = () => {
  return (
    <div className='text-white gap-4 max-w-[1200px] mx-auto my-12 grid sm:grid-cols-3' id='about'>
      
      {/* <div className='sm:col-span-2 glass sm:py-16 my-auto text-left p-4'>
        <div className='max-w-[80%] mx-auto'>
          <h2 className='text-3xl font-bold mb-4'>I can create your website </h2>
          <p className='text-gray-200'>some info about what i di</p>
        </div>

      </div> */}

      <div className='hidden sm:col-span-1 glass overflow-hidden'>
      <img className='w-[200px] md:w-[340px] absolute' src={notebookM}/>
      </div>

      <div className='hidden sm:col-span-1 glass overflow-hidden'>
      <img className='w-[200px] md:w-[500px] absolute' src={mobileR}/>
      </div>

      <div className='md:hidden relative overflow-hidden h-[200px] glass'>
      <img className='w-[200px] md:w-[340px] absolute' src={notebookM}/>
      <img className='w-[200px] right-0 absolute' src={mobileR}/>
      </div>

      {/* <div className='sm:col-span-2 glass sm:py-16 my-auto text-left p-4 '>
      <div className='max-w-[80%] mx-auto'>
          <h2 className='text-3xl font-bold mb-4'>I can create your website </h2>
          <p className='text-gray-200'>some info about what i di</p>
        </div>
         
      </div> */}

    </div>
  )
}

export default About