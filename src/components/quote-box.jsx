import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function QuoteBox({ _id, content, author ,showBookmark }) {

  const bookmarks = useSelector((state)=>state.rootReducer.bookmarks);
  const dispatch = useDispatch();

  const [isBookMarked, setisBookMarked] = useState(false);

  
  const isExist = ()=>{

    var flag=0;
     // if it added to bookmark dont add again
     bookmarks.forEach((quote)=>{
      if(quote._id==_id){
        console.log(quote._id ,_id);
        flag=1;
        return true;
      }
    })
    return flag;
  }
  
  // add quote to bookmark
  const addToBookmark = () => {

    setisBookMarked(!isBookMarked);
    console.log(isExist());

    if (!isBookMarked && !isExist()) {
      dispatch({ type: "ADD", payload: { _id, content, author } });
      localStorage.setItem("bookmarks" ,JSON.stringify([...bookmarks ,{ _id, content, author }]))
    }

    
  };

  useEffect(() => {
    setisBookMarked(false);
  }, [content])
  
  return (
    <div className="quote">
      <p className="content">{content}</p>
      <p className="author">- {author}</p>
      {
        showBookmark && 

        <div style={{ display: "flex", justifyContent: "end" }}>
          {/*bookmark svg*/}
  
          <svg
            width="40px"
            height="50px"
            viewBox="0 0 24 24"
            fill={`${isBookMarked ?"yellow":"none"}`}
            onClick={addToBookmark}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.75 5H8.25C7.55964 5 7 5.58763 7 6.3125V19L12 15.5L17 19V6.3125C17 5.58763 16.4404 5 15.75 5Z"
              stroke="#464455"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      }
    </div>
  );
}
