import QuoteBox from "./components/quote-box";
import "./App.css";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import Bookmarks from "./components/Bookmarks";
import { useDispatch } from "react-redux";
import Loader from "./components/loader";

function App() {

  const [onHome, setonHome] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    
    
    if( JSON.parse(localStorage.getItem("bookmarks"))){
      const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks"));
      dispatch({type:"SET_BOOKMARKS" ,payload:savedBookmarks});
    }

  }, [])
  
  
  return (
    <div className="app">
    
      <Navbar onHome={onHome} changeToHome={setonHome}/>
      {onHome ? <Home /> : <Bookmarks />}
    </div>
  );
}

export default App;
