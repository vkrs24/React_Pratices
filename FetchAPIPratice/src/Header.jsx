import React, { useRef } from "react";

function Header({setUserBtn,setPostsBtn,setCommentBtn,userBColor,setUserBColor,userTColor,setUserTColor,postBColor,setPostBColor,postTColor,setPostTColor,commentBColor,setCommentBColor,commentTColor,setCommentTColor,setUrl}) {

  const userRef = useRef();
  const postsRef = useRef();
  const commentsRef = useRef();

  function handleButtonClick(type) {
    if (type === "users") {
      setUserBtn(true);
      setPostsBtn(false);
      setCommentBtn(false);
      setUserTColor("white");
      setUserBColor("black");
      setPostTColor("black");
      setPostBColor("white");
      setCommentTColor("black");
      setCommentBColor("white");
      const url="https://jsonplaceholder.typicode.com/users"
      setUrl(url)
      
    } else if (type === "posts") {
      setUserBtn(false);
      setPostsBtn(true);
      setCommentBtn(false);
      setPostTColor("white");
      setPostBColor("black");
      setUserTColor("black");
      setUserBColor("white");
      setCommentTColor("black");
      setCommentBColor("white");
      const url="https://jsonplaceholder.typicode.com/posts"
      setUrl(url)

    } else if (type === "comments") {
      setUserBtn(false);
      setPostsBtn(false);
      setCommentBtn(true);
      setCommentTColor("white");
      setCommentBColor("black");
      setPostTColor("black");
      setPostBColor("white");
      setUserTColor("black");
      setUserBColor("white");
      const url="https://jsonplaceholder.typicode.com/comments"
      setUrl(url)
    }
  }

  return (
    <header>
      <div className="button">
        <button
          style={{backgroundColor:userBColor,color:userTColor}}
          ref={userRef}
          onClick={() => {
            handleButtonClick("users");
            userRef.current.focus();
          }}
          className="userButton"
        >
          Users
        </button>
      </div>
      <div className="button">
        <button
          style={{backgroundColor:postBColor,color:postTColor}}
          ref={postsRef}
          onClick={() => {
            handleButtonClick("posts");
            postsRef.current.focus();
          }}
          className="postsButton"
        >
          Posts
        </button>
      </div>
      <div className="button">
        <button
          style={{backgroundColor:commentBColor,color:commentTColor}}
          ref={commentsRef}
          onClick={() => {
            handleButtonClick("comments");
            commentsRef.current.focus();
          }}
          className="commentsButton"
        >
          Comments
        </button>
      </div>
    </header>
  );
}

export default Header;
