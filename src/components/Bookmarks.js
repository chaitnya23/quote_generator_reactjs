import React, { useEffect } from 'react'
import QuoteBox from './quote-box'
import { useDispatch, useSelector } from 'react-redux'

export default function Bookmarks() {
  
  const bookmarks = useSelector((state)=>state.rootReducer.bookmarks);
  const dispatch = useDispatch();

  
  return (
    <div>
    {
      bookmarks.map((quote)=>{
        return (
          <QuoteBox content={quote && quote.content} showBookmark={false} _id={quote._id} author={quote && quote.author}/>
        )
      })
    }
    </div>
  )
}
