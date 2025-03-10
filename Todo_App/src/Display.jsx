import React from 'react'


function Display({list_item,setList_Item}) {
  
  function handleDeleteFunction(id){
    const updatedList = list_item.filter((item) => item.id !== id);
    setList_Item(updatedList);
  }
  return (
    <div className='container'>
        {list_item.map((item)=>(
            <div className='displayContent' key={item.id}>
                <div><p>{item.task}</p></div>
                <div><p>{item.date}</p></div>
                <div><button className='Delete_button' onClick={()=>handleDeleteFunction(item.id)}>Delete</button></div>
            </div>
        ))}
    </div>
  )
}

export default Display