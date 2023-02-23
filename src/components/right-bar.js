import React, { useState, useEffect } from "react";
import axios from "axios";

export default function RightBar({
  text,
  settext,
  setbutton,
  button,
}) {


  console.log(text);
  console.log(button);

  const saveWidgets = async () => {
    

    try {
      const res = await axios.post("/api/create", {text ,button});

      console.log("created successfully");

      setbutton(null);
      settext(null);
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  // console.log(data);
  return (
    <div className="right-bar">
      <p className="head">Properties</p>

      <div>
        
        {text && (
          <div>
            <p className="">text </p>
            <input
              type="text"
              placeholder="Enter Your Text :"
              onChange={(e) => {
                settext({ ...text, text: e.target.value });
              }}
            />
          </div>
        )}
        {button && (
          <div>
            <div>
              <p className="">button text </p>
              <input
                type="text"
                placeholder="Enter Your Text :"
                value={button.text}
                onChange={(e) => {
                  setbutton({ ...button, text: e.target.value });
                }}
              />
            </div>
            <div>
              <p className="">button border-radius </p>
              <input
                type="text"
                placeholder="Enter Your Text :"
                value={button.border_radius}
                onChange={(e) => {
                  setbutton({ ...button, border_radius: e.target.value });
                }}
              />
            </div>
          </div>
        )}
      </div>

      <button onClick={saveWidgets}>Save</button>
    </div>
  );
}
