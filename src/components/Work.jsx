import React from 'react'
import workingImg from '../assets/Project.png'
import Dreamproject from '../assets/Project 2.png'

const Work = () => {
  return (
    <div name="Work" className='w-full md:h-screen text-gray-300  bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
            <p className='py-4'>Check Out some of my recent Work</p>
          </div>
          <div  style={{backgroundImage: `url(${workingImg})`}}
          className='grid sm:grid-cols-5 md:grid-cols-3 gap-6 object-scale-down h-48 w-96'>
            <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    Salefore Component
              
                  </span>
                  <div className='py-8 text-center'>
                    <a href='/'>Demo<button></button></a>
                  </div>
                  <div>
                    <a href='/'>Code<button></button></a>
                  </div>
                </div>
              </div>
           </div>

        </div>
    </div>
  )
}

export default Work