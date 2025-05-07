import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {

    const Stream = [
        
        {
            title:"Trending", 
            icon : <i class="ri-fire-fill"></i>
        },
        {
            title:"Tv Shows", 
            icon : <i class="ri-tv-2-fill"></i>
        },
        {
            title:"Popular", 
            icon : <i class="ri-bard-fill"></i>
        },
        {
            title:"Movies", 
            icon : <i class="ri-movie-2-fill"></i>
        },
        {
            title:"People", 
            icon :<i class="ri-team-fill"></i>
        },
        
    ];

    const WebsiteInfo = [
        
            {
                title:" About",
                icon : <i class="ri-information-fill"></i>
            },
            {
                title:" contact",
                icon : <i class="ri-phone-fill"></i>
            },
    
        
    ]



  return (
    <>
        <div className="w-[20%] h-full border-r-2 border-zinc-200 p-10 ">
            <h1 className='text-2xl text-white font-bold '>
                <i class=" text-[#6556CD] ri-tv-fill mr-3"></i>
                <span className=''> MovieFliz</span>  
            </h1>

            <nav className='flex flex-col text-zinc-400 text-xl gap-2 '>
                <h1 className='text-white font-semibold text-xl text-center mt-10 mb-5 mr-26 '>
                    New Feed 
                </h1>

                
                
                {
                    Stream.map((s , index) => {
                        return (
                           <div key={index} className='hover:bg-[#6556CD] rounded-lg text-lg  duration-100 transition-all p-3'>
                                
                                <Link>
                                    {s.icon}
                                    {s.title}
                                </Link>
                           </div>
                        )
                    })
                }
                <hr className=' h-[1px] '></hr>
                
                <h1 className='text-white font-semibold  text-center mt-4 mr-6  '>
                    Website information
                </h1>
                {
                    
                    WebsiteInfo.map((info , index) => {
                        return (
                            <div key={index} className='hover:bg-[#6556CD]  text-lg rounded-lg  duration-100 transition-all p-3'>
                                
                                <Link>
                                    {info.icon}
                                    {info.title}
                                </Link>
                           </div>
                        );
                    })
                }

            </nav>
        </div>


    </>
  )
}

export default SideNav 
