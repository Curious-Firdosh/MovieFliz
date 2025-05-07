import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './Component/Home'

const App = () => {
  return (
    <div className='w-screen h-screen bg-[#1F1E24] flex '>

        <Routes>
            <Route  path='/' element = {<Home/>}/>
        </Routes>
      
    </div>
  )
}

export default App
