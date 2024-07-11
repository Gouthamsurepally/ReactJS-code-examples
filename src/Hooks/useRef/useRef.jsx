import React from "react";
import { useState,useEffect,useRef } from "react";

export function TimeoutDemo(){
    const[message,setMessage]=useState('');
    let messageTrigger=useRef(null);

    function Msg1(){
        setMessage('hello..');
    }

    function Msg2(){
        setMessage('How are you..?');
    }

    function Msg3(){
        setMessage('Welcome to react');
    }

    function startClick(){
        setTimeout(Msg1,3000);
        messageTrigger.current=setTimeout(Msg2,6000);
        setTimeout(Msg3,10000);
    }

    function cancelClick(){
        // clearTimeout(messageTrigger.current);
        console.log(clearTimeout(messageTrigger.current));
    }

    return(
        <div className="container-fluid">
            <button onClick={startClick}>Start</button>
            <button onClick={cancelClick}>Cancel Msg2</button>
            <h2 className="mt-3 text-center">{message}</h2> 

        </div>
    )
}