import React from 'react'

function ToogleTextComponent({toggleColor,setToggleColor}) {

  function handleToogleColor(){
    let updateToggleColor=''  
    if(toggleColor=="black"){
      updateToggleColor="white"
      setToggleColor(updateToggleColor)
    }
    else{
      updateToggleColor="black"
      setToggleColor(updateToggleColor)
    }
    
  }

  return (
    <div className='ToogleTextComponent'>
        <div><button onClick={()=>handleToogleColor()}>Toogle Text Color</button></div>
    </div>
  )
}

export default ToogleTextComponent