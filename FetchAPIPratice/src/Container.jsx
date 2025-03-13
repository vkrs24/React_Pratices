import React, { useEffect, useState } from 'react'
import Header from './Header'
import Content from './Content'

function Container() {

  const [userBtn,setUserBtn]=useState(true)
  const [postsBtn,setPostsBtn]=useState(false)
  const [commentBtn,setCommentBtn]=useState(false)

  const [userBColor,setUserBColor]=useState("black")
  const [userTColor,setUserTColor]=useState("white")

  const [postBColor,setPostBColor]=useState("white")
  const [postTColor,setPostTColor]=useState("black")

  const [commentBColor,setCommentBColor]=useState("white")
  const [commentTColor,setCommentTColor]=useState("black")

  const [contentData,setContentData]=useState([])
  const [url,setUrl]=useState("https://jsonplaceholder.typicode.com/users")

  useEffect(()=>{
    const Fetch = async() =>{
      try{
        const response=await fetch(url);
        if(!response.ok){
          throw new Error("Data has not found");
        }
        const newContent= await response.json();
        setContentData(newContent);
        console.log(newContent)
      }
      catch(err){
        console.log(err.message)
      }
    }
    Fetch();
  },[url])


  return (
    <div>
        <Header
        setUserBtn={setUserBtn}
        setPostsBtn={setPostsBtn}
        setCommentBtn={setCommentBtn}
        userBColor={userBColor}
        setUserBColor={setUserBColor}
        userTColor={userTColor}
        setUserTColor={setUserTColor}
        postBColor={postBColor}
        setPostBColor={setPostBColor}
        postTColor={postTColor}
        setPostTColor={setPostTColor}
        commentBColor={commentBColor}
        setCommentBColor={setCommentBColor}
        commentTColor={commentTColor}
        setCommentTColor={setCommentTColor}
        setUrl={setUrl}
        />
        <Content
        data={contentData}
        />
    </div>
  )
}

export default Container