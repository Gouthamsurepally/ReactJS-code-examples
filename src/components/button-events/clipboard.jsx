import { useState } from "react";
import { useEffect } from "react";
import React from "react";

 export function ClipBoard(){

    const[msg,setMsg]=useState('');

    function openImage(){
        window.open("m2.jpg","Mobile","width=300 height=400")
    }

    useEffect(()=>{
        document.onpaste=function(){
            return false;
        }
    },[]);
    return(
        <div className="container-fluid">
            <h2>Button Events</h2>
            <img src="m2.jpg" onDoubleClick={openImage} width="100" height="100" />
            <p>Double click to view large</p>
            <h2>our terms and conditions</h2>
            <textarea onCut={()=>{setMsg ('Removed and copied to clipboard')}} onCopy={()=>{setMsg('copied to clipboard');}} rows='4' cols='40' >
                Read our terms of service
            </textarea>
            <p>{msg}</p>

        </div>
    )
}