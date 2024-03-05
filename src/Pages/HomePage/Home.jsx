import React from 'react'
import { FaInstagram } from "react-icons/fa";
//UIcomponents------------------------------------------------------
import CursorBlinkComponent from '../../Components/UI/Cursorblinker';
import Button from '../../Components/UI/Button'
import { Link } from 'react-router-dom';
//----------------------------------------------------------------
import {icon} from '../../context/content'

import img1 from '../../assets/Cricket-bro.svg';
import img from '../../assets/Icons/Logo.png'
const Home = () => {

  return (
  
    <div> 
      <section className="bg-[#f2f7fc] flex flex-row  items-center px-20 h-[90vh]  ">
				<div className="flex flex-col w-[50%] mx-[60px] gap-10" >
					<h1 className="text-[27px] font-bold font-[Poppins] mb-3 mt-2 " >
					Your Ultimate Guide to Discovering Sports Venues around you
						<CursorBlinkComponent />
					</h1>
					<p className="text-xl font-mono text-justify">
						Welcome to our turf booking website, your gateway to a
						world of sports and recreation made easy. Our platform is
						designed with one goal in mind: to make your turf
						booking experiance seamless and enjoyable.
					</p>
					<Link
					    to={"/book"}>
							<Button text={"Book now"} customStyles={"bg-black px-6 text-white font-semibold hover:bg-[#3f7b41] hover:text-black hover:outline outline-1 duration-300"}/>
						</Link>
				</div>
				<div className="w-[50%] mb-38">
					<img
						className="h-[90%]  w-[90%]"
						src={img1}
						alt="cricket guy svg"
					/>
				</div>
			</section>
			

<section className=' h-screen'>
{/* About module */}
        <div className=' h-full flex flex-col justify-center mx-[15px]  laptop:mx-[120px]'>
           <div className='  pl-6 border-l-4 border-[#3f7b41] rounded-sm  '>
              <p className=' font-bold  tablet:text-2xl laptop:text-3xl laptop:w-[500px]' data-aos= "fade-left" data-aos-duration="1000">Your one-stop platform for sports</p>
           </div>
     <div className=' h-80  mt-20 bg-[#e5e7eb] rounded grid grid-cols-2 items-center px-20 '>
           {icon.map((item,key)=>{
            return <div key={key} className='flex items-center gap-4 h-[100px] text-[18px] font-semibold ' data-aos= "fade-right" data-aos-duration="1000">
                <img src={item.icons} className='w-[100px] '/>
                <p>{item.caption}</p>
              </div>
           })}
        </div>
        </div>     
</section>
 <footer className='flex flex-col justify-center h-[230px] mt-20 bg-gray-900 tablet:bg-opacity-90'>
 <div className='mx-28 h-40 '>
    <div className='flex flex-col justify-between h-full w-48' > 
	   <div className='flex items-center'>
	   <img src={img} width={50} />
        <h1 className="font-[poppins] font-semibold text-4xl hover:text-[#3f7b41] text-white pl-2" >
						Turfied</h1>
	   </div>
	   <p className=' text-white font-[poppins] text-sm '>Copyright © 2020 <br/>  All rights reserved</p>
	   <div className='flex h-10 justify-between'>
		  <div className='w-10 rounded-full bg-[#3e4450] flex justify-center items-center '><FaInstagram className='text-2xl text-white' /></div>
		  <div className='w-10 rounded-full bg-[#3e4450] '></div>
		  <div className='w-10 rounded-full bg-[#3e4450] '></div>
		  <div className='w-10 rounded-full bg-[#3e4450] '></div>
	   </div>
</div>  

        </div>
 </footer>
	</div>


  )
}

export default Home