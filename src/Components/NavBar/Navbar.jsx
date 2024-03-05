import React from 'react'
import { Link } from 'react-router-dom';
import { RxHamburgerMenu,RxCross1 } from "react-icons/rx";
import { FaVolleyballBall } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import Headroom from 'react-headroom';//NavBar all time visible animation

import Menus from '../../context/content'


const Navbar = () => {

  const [menu,setMenu]=React.useState(false);


  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  

  return (
    <Headroom>
    
    <nav id='navbar' className={classNames('px-3  laptop:px-5 desktop:px-16  py-2  z-10 bg-gray-900 tablet:bg-opacity-90 w-full justify-center items-center  ',menu &&' tablet:h-[70px]')}> 
   
      <div className='w-full  flex justify-between items-center'>
        <div className='flex flex-row justify-center items-center cursor-pointer hover:opacity-70' >
        <FaVolleyballBall className='text-white text-4xl ' />
        <h1 className="font-[poppins] font-semibold text-2xl hover:opacity-70 text-white pl-2">
						Turfied
					</h1>
        </div>
        <div className='flex mr-2 text-white items-center tablet:hidden' onClick={()=>{setMenu(!menu)}}>
          <div>
          {menu?<RxCross1 className=' size-8'/> :<RxHamburgerMenu className=' size-8'/>}
          </div>   
        </div>
        <div>
        <ul className=' flex gap-5 '>
                {Menus.map((items, key)=>{
                    return <li key={key}>
                    <Link to={items.to} className='font-[poppins]  text-md hover:opacity-70 focus:underline underline-offset-8 decoration-2 decoration-[#3f7b41] text-white'>
                    {items.caption}
                    </Link>
                          </li>         
                })}
            </ul>   
        </div>
            <div className='hidden tablet:flex justify-center items-center gap-5 '>         
            <Link to={'/signup'} className='text-white font-inter text-[18px] hover:opacity-70  p-[5px]   button'>
            Login/Signup </Link>
        </div>
     </div>
     
      {menu && 
      <div className=' tablet:hidden flex justify-center items-center mt-3 '> 
             <ul className='w-80 flex flex-col gap-3 items-center mt-2 text-white font-inter rounded-lg  mb-2 '>
                {Menus.map((items, key)=>{
                    return <li className='w-full flex justify-start' key={key}>
                    <a className='active:text-[#3f7b41] text-2xl font-bold' href={items.href}>{items.caption}</a></li>
                })}
                <li className='w-full flex justify-start' >
                <Link to={'/signup'} className='active:text-[#3f7b41] text-2xl font-bold' >Login <FaArrowRightLong /></Link></li> 
            </ul>
            </div> }
    </nav>
    
    </Headroom>
  )
}

export default Navbar