import { useState } from "react";
import { useEffect } from "react";
import React from "react";

export function ButtonEvent(){

    function openImage(){
        window.open("m1.jpg","Mobile","width=300 height=400");
    }

    useEffect(()=>{
        document.oncontextmenu=function(){
            alert("Right click disabled");
            return false;
        }
    },[]);

    return(
        <div className="container-fluid">
            <h2>Button Events</h2>
            <img src="m1.jpg" onDoubleClick={openImage} width="100" height="100" />
            <p>Double click to view large</p>
            <h2>Our terms and conditions</h2>
            <textarea rows='4' cols='40'>Read our terms of services</textarea>
        </div>
    )
}