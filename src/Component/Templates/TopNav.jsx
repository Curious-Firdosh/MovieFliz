import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import apiConnector from "../../utils/apiConnector"
import noimage from "/noImage.jpg"

const TopNav = () => {


    const [SearchBar , setSearchBar] = useState('');
    const [data , setData] = useState([])


    const getallSearches = async() => {

       try{
            const {data} = await apiConnector.get(`/search/multi?query=${SearchBar}`);
            setData(data.results)
           
            
       }
       catch(err) {
             console.log("Can Not Featch THe Movies" ,err);
             
       }
    };

    useEffect(() => {
        getallSearches()
    },[SearchBar])
    


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
                        data.map((content, index) => {
                            return (
                                <Link 
                                    key={index}
                                    className= 'hover:bg-zinc-400 text-zinc-600 font-semibold   w-[100%] flex r items-center p-10 border-b-2  '>
                                    <img    
                                        
                                        className=' w-[10vh] h-[10vh] object-cover mr-5  '
                                        src= 
                                        {   
                                            content?.backdrop_path || 
                                            content?.known_for?.backdrop_path  ||
                                            content.profile_path ? `https://image.tmdb.org/t/p/original/${
                                             content?.backdrop_path || content.profile_path }` : noimage
                                        }
                                        alt='#'
                                     />
                                    <span>
                                        {
                                            content.name || 
                                            content.original_name ||
                                            content.title || 
                                            content.originals 
                                        }
                                    </span>
                                </Link>
                            )
                        })
                    }
             </div>

    </div>
  )
}

export default TopNav
