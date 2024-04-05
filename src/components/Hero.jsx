import React from 'react'
import notebookL from '../assets/notebookL.png'
import notebookM from '../assets/notebookM.png'
import profilepic from '../assets/profilepic.png'
import mobileR from '../assets/mobileR.png'
import { TypeAnimation } from 'react-type-animation'



const Hero = () => {
  return (
    <div className='relative grid sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 overflow-hidden' id='hero'>
        
     <img className='hidden md:block absolute z-[-1] w-[500px] bottom-0 left-[-120px]' src={notebookL} alt=""/>  
     <img className='absolute z-[-1] w-[400px] bottom-[-100px] left-[320px]' src={notebookM} alt=""/>
     <img className='absolute z-[-1] w-[250px] bottom-[200px] md:bottom-[300px] left-[450px]' src={mobileR} alt=""/>

     <div className='glass px-5 cols-span-2 my-auto '>
        <h1 className= 'text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold'>
            <p className='mb-4 text-gray-500'>I'm a</p>
            <TypeAnimation 
                sequence={[
                    "Frontend Dev",
                    1000,
                    "Web Designer",
                    1000,
                    "Fullstack Engineer",
                     1000
                ]}
                wrapper="span"
                speed={50}
                repeat={500}
            />
        </h1>
        <p className='font-bold text-gray-300 my-6 sm:text-lg lg:text-xl max-w-[200px] md:max-w-[600px ml-1]'>
                My name is Faatimah and I have 2+ years experience in frontend web development.
        </p>
    </div>

<div className='absolute bottom-0 right-0 w-[200px] lg:w-[600px]' >
<img  src={profilepic} alt=""/>
</div>


    </div>
  )
}

export default Hero