// import React from 'react'
import React, {useState} from "react"
export default function TextForm(props) {
    
    // button for  upper case
    const handleUpClick = () => {
       let newText= text.toUpperCase();
        setText(newText);
    }
    // button for lower case 
    const handleLoClick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    // button to clear the screen 
    const handleClear = () => {
        let newText=""
         setText(newText); 
     }
    // event for text 
    const handleOnchange = (event) => {
        console.log("on change");
        setText(event.target.value); 
    }
   
    // hook state 
    const [text, setText] = useState("");
    return (
        <>
        <div className="contanier">
            <h1 className="ps-5 ms-5 fst-italic" >{props.heading}</h1> 
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="3"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to UpperCase</button>
            <br/>
            <br />
            <button className="btn btn-primary mx-2" onClick={handleLoClick}> Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Screen </button>
        </div>
    <div className="conatiner my-3">
        <h1 className="fst-italic">Your text Summary </h1>
     {/* word count  */}
        <p >{text.split(" ").length}Words and Characters {text.length}</p>
        {/* calculating the reading time  */}
        <p>{0.008*text.split(" ").length} Minutes to Read</p>
        <h3 className="fst-italic">Preview : </h3>
        <p>{text}</p>
    </div>

        </>
    )
}

