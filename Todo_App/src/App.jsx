import { useState } from "react"
import Content from "./Content"
import Footer from "./Footer"
import Head from "./head"
import Display from "./Display"


function App() {
  const [list_item,setList_Item]=useState([])
  const [task_name,setTask_Name]=useState('') 
  const [task_date,setTask_Date]=useState('') 


  return (
    <>
      <Head/>
      <Content
        list_item={list_item}
        setList_Item={setList_Item}
        task_name={task_name}
        setTask_Name={setTask_Name}
        task_date={task_date}
        setTask_Date={setTask_Date}
      />
      <Display
      list_item={list_item}
      setList_Item={setList_Item}
      />
      <Footer/>
    </>
  )
}

export default App
