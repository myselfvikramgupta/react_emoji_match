import React from 'react'
let msg="";
const Slot =(props)=>{
    // if((props.x===props.y) && (props.y===props.z) ){
    //     msg="Matching"
    // }else{
    //     msg="Not matching"
    // }
    const {x,y,z} = props;
    ((x===y) && (y===z)) ? msg="Matching" : msg="Not matching";
    return(
        <>
          <div className="slot__inner">
             <h1>{x} {y} {z}</h1>
             <span>{msg}</span>
          </div>
      </>
    );
 
}

export default Slot;