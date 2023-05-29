import React, {useState} from 'react'
import {FaBars, FaTimes, FaLinkedin, FaGithub} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/ProfilePic.jpg'
import Home from './Home'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08192f] text-gray-300'>
      <div className='rounded-ee-full'>
       <img src={Logo} alt="Logo image" style={{width: '50px'}} />
      </div>

       {/* Menu */}
      <div>
        <ul className='hidden md:flex'>
           <li>Home</li>
           <li>About</li>
           <li>Skills</li>
           <li>Work</li>
           <li>Contact</li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes/>}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gray-800 flex flex-col justify-center items-center'}>
        <li className='py-6 text-4x'>Home</li>
        <li className='py-6 text-4x'>About</li>
        <li className='py-6 text-4x'>Skill</li>
        <li className='py-6 text-4x'>Work</li>
        <li className='py-6 text-4x'>Contact</li>
      </ul> 
    

      {/* Social Icons */ }
      <div className=' hidden lg:flex fixed flex-col top-[35%] left-0'>
      <ul>
        <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-900'>
          <a className=' flex justify-between items-center w-full text-gray-300' href='/'>
          Linkedin <FaLinkedin size={30} />
        </a></li>
        <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
          <a className=' flex justify-between items-center w-full text-gray-300' href='/'>
          Github <FaGithub size={30} />
        </a></li>
        <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-900'>
          <a className=' flex justify-between items-center w-full text-gray-300' href='/'>
          Email <HiOutlineMail size={30} />
        </a></li>
        <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-500'>
          <a className=' flex justify-between items-center w-full text-gray-300' href='/'>
          Resume <BsFillPersonLinesFill size={30} />
        </a></li>
      </ul>
      </div>
    


    </div>
  )
}

export default Navbar