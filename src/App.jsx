import React from 'react'
import './App.css'
import Header from './components/Header'
import Grid1 from './components/Grid1'
import Grid2 from './components/Grid2'
import Grid3 from './components/Grid3'
import Sidebar from './components/Sidebar'
function App() {


  return (

    <div className='flex'>
      <div className='w-1/6 whitespace-nowrap'>
        <Sidebar />
      </div>

      <div className='w-5/6 '>
        <Header />
        <div className='grid grid-cols-3 bg-[#FCFBFC] gap-10 px-14 py-10'>
          <Grid1 />
          <Grid1 />
          <Grid1 />
        </div>
        {/* <Grid2 />
        <Grid3 /> */}
      </div>
    </div>



  )
}

export default App
