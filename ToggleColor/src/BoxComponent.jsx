import React from 'react'

function BoxComponent({boxColor,color,toggleColor}) {
  
  if(!color){
    boxColor="Empty"
  }

  return (
    <div style={{backgroundColor:color}} className='Box_Component'>
        <div><p style={{color:toggleColor}}>{boxColor}</p></div>
    </div>
  )
}

export default BoxComponent