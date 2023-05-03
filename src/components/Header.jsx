import React,{useState} from 'react';
import image8 from '../assets/image8.svg'
import bordview from '../assets/bordview.svg'
import listview from '../assets/listview.svg'
import participantview from '../assets/participantview.svg'
import powerview from '../assets/powerview.svg'
import plus2 from '../assets/plus2.svg'
import Grid1 from './Grid1'
import Grid2 from './Grid2'
import Grid3 from './Grid3'
import Sidebar from './Sidebar'
import Vector from '../assets/Vector.svg'
import dashboard from '../assets/dashboard.svg'
import sethings from '../assets/sethings.svg'
import users from '../assets/users.svg'
import addeduser from '../assets/addeduser.svg'
import affiliate from '../assets/affiliate.svg'
import line3 from '../assets/Line3.svg'
import plus from '../assets/plus.svg'
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
export default function Header() {
  const [nav, setNav]=useState(true)


const Handlenav=()=>{
  setNav(!nav)
}


  return (
    <div>
        <Sidebar/>
       <div className=' flex flex-col bg-black xl:w-[1345px] xl:h-[220px]'>



       <div className=' relative  text-black h-[46px] left-[30px] text-[36px] font-semibold w-[400px] top-[20px] xl:h-[46px] xl:left-[300px] xl:w-[823px] xl:[30px]'>New Campaign Run</div>
       <div className=' relative top-[25px] xl:top-[25px] text-[#B8B9BD]  font-normal text-[14px] ml-[30px] xl:ml-[300px]  '>A new campaign launch work for brand new feature in May month</div>
              
            <div className=' absolute  bg-black text-white h-[42px] pt-2 pl-3 rounded-[8px]  w-[140px] left-[30px] top-[110px] font-normal xl:h-[42px] xl:pt-2 xl:pl-3 xl:rounded-[8px] xl:w-[140px] xl:left-[1100px] xl:top-[35px]  '>ADD MEMBERS</div>       
            <div className='members xl:mb-6 '>
               
               <div>  <img src={image8} className=' relative top-[85px] left-[30px] rounded-[15px] xl:top-[100px] xl:left-[300px] xl:rounded[15px]' alt=''/>  </div>
               <div>  <img src={image8} className=' relative top-[54px] left-[50px] rounded-[15px] xl:top-[68px] xl:left-[326px] xl:rounded-[15px] ' alt=''/>  </div>
               <div>  <img src={image8} className=' relative top-[23px] left-[70px] rounded-[15px] xl:top-[36px] xl:left-[353px] xl:rounded-[15px]' alt=''/>  </div>
                <div className=' relative -top-[40px] text-[#B8B9BD]  font-normal text-[14px] ml-[110px] mt-9 xl:top-[0px] xl:ml-[400px] xl:mt-[9px]'>8 memeber</div>
               </div>



               <div className=' absolute flex left-[200px] top-[190px] space-x-4 text-[#B8B9BD] font-medium text-[14px] xl:left-[740px] xl:top-[170px] xl:space-x-4'>
                 <img src={participantview} className=' relative left-2 ' alt=''/>
                 <a className=' hidden xl:block'>Participants View</a>
                <img src={bordview} className=' relative left-2' alt=''/>

                <a className=' hidden xl:block'> Board View</a>
                <img src={listview} className=' relative left-2' alt=''/>

                <a className=' hidden xl:block'>list View</a>
                <img src={powerview} className=' relative left-2' alt=''/>

                <a className=' hidden xl:block'>Power View</a>
                <img src={plus2} className='' alt=''/>

               </div>

               <div className=' bg-[#FCFBFC] py-16 grid grid-cols-1 '>
        
               <Grid1/>
        <Grid2/>
         <Grid3/>
  </div>
       </div>
    </div>
  )
}
