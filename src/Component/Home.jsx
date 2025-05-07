import React from "react"
import SideNav from "./Templates/SideNav";

const Home = () => {
    document.title = "MovieFliz || HomePage  "
    return (
        <>
            <SideNav/>
            <div className="w-[80%] h-full"></div>

          
        </>
    );
    
}
export default Home