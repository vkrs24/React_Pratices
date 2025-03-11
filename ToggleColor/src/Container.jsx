import React, { useState } from 'react'
import BoxComponent from './BoxComponent'
import AddColorComponent from './AddColorComponent'
import ToogleTextComponent from './ToogleTextComponent'

function Container() {
  const [color,setColor]=useState("");
  const [boxColor,setBoxColor]=useState("");
  const [toggleColor,setToggleColor]=useState("black");

  return (
    <div className='Contaianer'>
        <BoxComponent
          boxColor={boxColor}
          color={color}
          toggleColor={toggleColor}
        />
        <AddColorComponent
          color={color}
          setColor={setColor}
          setBoxColor={setBoxColor}
        />
        <ToogleTextComponent
          toggleColor={toggleColor}
          setToggleColor={setToggleColor}
        />
    </div>
  )
}

export default Container