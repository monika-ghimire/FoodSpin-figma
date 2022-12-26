import React, { useState } from 'react'
import './FoodImg.css'
import img1 from '../asset/img1.png'
import img2 from '../asset/img2.png'
import img3 from '../asset/img3.png'
import img4 from '../asset/img4.png'
import img5 from '../asset/img5.png'
import img6 from '../asset/img6.png';


export default function FoodImg() {
    
    const [plusValue,setplusValue]=useState(0)
  
    const spinRight=()=>{

        setplusValue(plusValue+30)  ;
        let value=plusValue;
        let spinBox=document.getElementById('imgholder')
    
      spinBox.style.transform = `rotate(${value}deg)`
    }

  

  return (
   <>
   <div className='cricle'> 
   <div className='img-holder' id='imgholder'>
    <div className='img1'>
    <img src={img1}/>
    </div>
    <div className='img2'>
    <img src={img2}/>
    </div>
    <div className='img3'>
    <img src={img3}/>
    </div>
    <div className='img4'>
    <img src={img4}/>
    </div>
    <div className='img5'>
    <img src={img5}/>
    </div>
    {/* <div className='img6'>
    <img src={img6}/>
    </div> */}

   </div>
         </div>

   
   <button onClick={spinRight}>⬇️</button>
   </>
  )
}
