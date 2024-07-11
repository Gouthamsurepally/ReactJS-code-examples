import React, { useState } from "react";
import { Box2 } from "../task1/task1";

export function Box1(){
    const[bgcolor3,setBgcolor3]=useState('');

    function handleColorChange(){
        const randomColor=`#${Math.floor(Math.random() * 16777215).toString(16) }`;
        setBgcolor3(randomColor)
    }
    return(
        <div className="container-fluid">
            <div className="card bg-danger-subtle p-4" style={{height:'400px',width:'400px'}} >
                <Box2
                 bgcolor3={bgcolor3}
                 setBgcolor3={setBgcolor3}
                 />
            </div>
            <button className="btn btn-dark mt-4" onClick={handleColorChange}>Change</button>
        </div>
    )
} 