import React, { useEffect } from "react";

export default function Sidebar({ setwidgets, widgets ,text ,settext ,setbutton ,button }) {

  
  const handleOnclick = (widget) => {
    // if (widgets.length == 2) {
    //   return;
    // }

    // if (widget == "button") {
    //   setwidgets([
    //     ...widgets,
    //     {
    //       widget,
    //       properties: [{ name:"bordeRadius" ,value: null }, {name:"text", value: null }],
    //     },
    //   ]);
    // } else {
    //   setwidgets([
    //     ...widgets,
    //     {
    //       widget,
    //       properties: [ {name:"text", value: null }],
    //     },
    //   ]);
    // }

    if(widget==="textbox"){
      settext({
        widget:"textbox",
        text:""
      })
    }
     if(widget==="button"){
      setbutton({
        widget:"button",
        text:"",
        border_radius:""
      })
    }
  };

  return (
    <div className="sidebar">
      <p className="head"> Widgets</p>

      <div className="box" onClick={() => handleOnclick("button")}>
        Button
      </div>
      <div className="box" onClick={() => handleOnclick("textbox")}>
        Text box
      </div>
    </div>
  );
}
