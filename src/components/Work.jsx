import React from 'react'
import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.png'
import proj3 from '../assets/proj3.jpg'


const projects = [
  { id: 1, img: proj1, title: 'Project 1', liveUrl:'https://fancy-act1.surge.sh/'},
  { id: 2, img: proj2, title: 'Project 2', liveUrl:'https://sir-mix-alot.surge.sh/'},
  { id: 3, img: proj3, title: 'Project 3', liveUrl:'/'}
]

const Work = () => {
  return (
    <div className='glass max-w-[1200px] mx-auto grid grid-cols-2 gap-4 glass p-6' id='work'>

      <div className='col-span-2 my-4'>
        <h1 className='text-4xl mb-4 text-gray-300'>My Work</h1>
      </div>

      {projects.map((project) =>(

          <div key={project.id} className='glass transform transition-transform hover:scale-105 duration-300 overflow-hidden shadow-1g h-[200px] group relative'>
            <img src={project.img} className='w-full h-full object-cover'/>
            <div className='group-hover:opacity-90 opacity-0 bg-[#232323] absolute transition-opacity duration-300 inset-0 flex justify-center items-center'>
                <span className='text 2xl font-bold text-white mb-4'>{project.title}</span>
                <div>
                  <a href={project.liveUrl} className='bg-white px-5 py-2 rounded-xl font-bold'> 
                  Live Version
                  </a> | 
                </div>
            </div>
          </div>

      ))}

    </div>
  )
}

export default Work