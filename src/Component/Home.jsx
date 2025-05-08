import React, { useEffect, useState } from "react"
import SideNav from "./Templates/SideNav";
import TopNav from "./Templates/TopNav";
import apiConnector from "../utils/apiConnector"
import Header from "./Templates/Header";

const Home = () => {
    document.title = "MovieFliz || HomePage  "

    const [walpaper , setWalpaper] = useState([])

    const getWalpaper = async() => {

        try{
             const {data} = await apiConnector.get(`/trending/all/day`);
             let randomWalpaper = data.results[(Math.random() * data.results.length ).toFixed()]
             setWalpaper(randomWalpaper)
            
             
        }
        catch(err) {
              console.log("Can Not Featch THe trending " ,err);
              
        }
    }
    console.log("Walpaper" , walpaper);
    

    useEffect (() => {
        walpaper.length === 0  && getWalpaper()
    } , [])

return walpaper ?  (
        <>
            <SideNav/>
            <div className="w-[80%] h-full">
                    <TopNav/>
                    <Header data = {walpaper} />
                   
            </div>

          
        </>
    )  : <h1 className="text-center mt-32">Loading.....</h1>;
    
}
export default Home