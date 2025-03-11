import React from 'react'

function AddColorComponent({color,setColor,setBoxColor}) {
  function handleBoxColor(c){
    const updateColor=c;
    setColor(updateColor)
    setBoxColor(updateColor)
  }
  
  return (
    <div className='AddColorComponent'>
        <div>
            <input type="text" 
            placeholder='Add a Colour'
            value={color}
            onChange={(e)=>handleBoxColor(e.target.value)}
            />
        </div>
    </div>
  )
}

export default AddColorComponent