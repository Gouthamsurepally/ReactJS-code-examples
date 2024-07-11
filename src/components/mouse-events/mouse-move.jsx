import { useState } from "react";

export function MouseMove(){
    const [objectStyle,setObjectStyle]=useState({position:'',top:'',left:''});

    function handleMouseMove(e){
        setObjectStyle({
            position:'fixed',
            top:e.clientY +"px",
            left:e.clientX +"px"
        })
    }

    return(
        <div className="container-fluid" onMouseMove={handleMouseMove}>
            <div style={{height:'1000px'}}>
                <h2>mouse move event</h2>
            </div>
                <img src="Earth.gif" height='100px' width='100' style={objectStyle} />
        </div>
    )
}