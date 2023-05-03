import React from 'react'
import './App.css'
import Header from './components/Header'
import Grid1 from './components/Grid1'
import Grid2 from './components/Grid2'
import Grid3 from './components/Grid3'
import Sidebar from './components/Sidebar'
function App() {
  

  return (
  
      <div className=''>
        <Sidebar/>
        <Header/>
        <Grid1/>
        <Grid2/>
         <Grid3/>
      </div>
      
   
    
  )
}

export default App