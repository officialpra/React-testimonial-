import React, { useState } from 'react'
import Card from './Card';

export const Testimonials = (props) => {
    const reviews=props.reviews;

    let n =reviews.length;
    // console.log(n);
   const[index,setIndex]=useState(0);

    const handleLeft=()=>{
        if(index-1<0){
            setIndex(n-1)
        }
        else{
            setIndex(index-1);
        }

    }
    const handleright=()=>{
        if(index+1>=n){
            setIndex(0)
        }
        else{
            setIndex(index+1);
        }
        
    }
    const handlerandom=()=>{
        let RandomIndex=  Math.floor(Math.random()*n);
        setIndex(RandomIndex);


        
    }

  return (
    <div>
         <div>Testimonials</div>
         {/* {reviews.map((e)=>(<Card review={e}/>))} */}
         <Card review={reviews[index]}/>

         <button onClick={handleLeft}>left(-) </button>
         <button onClick={handleright}>Right(+)</button>
         <div>  <button onClick={handlerandom}>Surprise Me</button> </div>

        
          

    </div>
    
  )
}
