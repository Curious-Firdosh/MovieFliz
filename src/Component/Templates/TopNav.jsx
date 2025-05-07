import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const TopNav = () => {

    const searchContent = [
        {
            title : "Sikander"
        },
        {
            title : "Sikander"
        },
        {
            title : "Sikander"
        },
        {
            title : "Sikander"
        },
        {
            title : "Sikander"
        },
        {
            title : "Sikander"
        },

    ]

    const [SearchBar , setSearchBar] = useState('');

    console.log(SearchBar);
    




  return (
    <div className='w-full h-[10vh] relative  flex justify-start ml-[20%] items-center '>

            <i class="ri-search-line text-zinc-400 text-3xl "></i>
            
            <input 
                onChange={(e) => setSearchBar( e.target.value)} 
                className='bg-transparent w-[50%] text-zinc-300 mx-10 rounded-sm p-2 text-xl outline-none border-none '
                type='text'
                placeholder='Search Anything'
                value={SearchBar}
             />
             
             {
                SearchBar.length > 0 && 
                <i 
                    onClick={()=> setSearchBar("")}
                    class="ri-close-fill text-zinc-400 text-3xl"></i>
             }

             <div className='absolute w-[50%] max-h-[50vh] bg-zinc-200  top-[100%] mt-10 overflow-auto '>

                    {
                        searchContent.map((content, index) => {
                            return (
                                <Link 
                                    key={index}
                                    className= 'hover:bg-zinc-400 text-zinc-600 font-semibold   w-[100%] flex justify-center items-center p-10 border-b-2  '>
                                    <img src='' />
                                    <span>{content.title}</span>
                                </Link>
                            )
                        })
                    }
             </div>

    </div>
  )
}

export default TopNav
