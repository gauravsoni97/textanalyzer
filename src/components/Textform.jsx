import React, { useState } from "react";

export const Textform = () => {
  const [mytext, setmytext] = useState("");

  const onchangeeve = (event) => {
    setmytext(event.target.value);
  };

  const uppercasebtn = () => {
    let newText = mytext.toUpperCase();
    setmytext(newText);
  };
  const lowercasebtn = () => {
    let newText = mytext.toLowerCase();
    setmytext(newText);
  };
  const copybtn = () => {
    let mytext =  document.getElementById("mybox");
    mytext.select();
    navigator.clipboard.writeText(mytext.value)
  };
  const extrabtn = () => {
    let text =  mytext.split(/[ ]+/);
    setmytext(text.join(" "))
  };

  const clearbtn = () => {
    let newText = "";
    setmytext(newText);
  };

  return (
    <>
      <div className="main-div">
        <h1>💬 Text Analyzer</h1>
        <br />
        <textarea
        id="mybox"
          placeholder="enter text here"
          value={mytext}
          onChange={onchangeeve}
        ></textarea>
        <br />
        <div className="btns">
          <button onClick={uppercasebtn}>Upper Case</button>
          <button onClick={lowercasebtn}>Lower Case</button>
          <button onClick={extrabtn}>Remove Extra Spaces</button>
          <button onClick={copybtn}>Copy All</button>
          <button onClick={clearbtn}>Clear All</button>
        </div>
      </div>
      <div className="text-info">
        <h3>Text Info</h3>
        <div className="infobox">
        <p>
           Words {mytext.split(" ").length - 1}, 
        </p>
        <p> Character Count {mytext.length},</p> 
        <p>Reading Time = {0.008 * mytext.split(" ").length}min</p>

        </div>
      </div>
    </>
  );
};
