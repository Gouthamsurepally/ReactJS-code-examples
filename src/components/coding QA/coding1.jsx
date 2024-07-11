import { useState } from "react";


// Question: Create a simple React component that renders a button which increments a counter on each click.

export function Coding1(){
    const[count,setCount]=useState(0);
    

    function handleIncrement(){
        setTimeout(()=>{
            setCount(prevCount=>prevCount+1);
        },3000);
    };

    function handleDecrement(){
        setCount(prevCount=>prevCount-1);
    };

  

    return(
        <div className="container-fluid">
            <button className="btn btn-dark me-3" onClick={handleIncrement}>Increment</button>
            <button className="btn btn-dark" onClick={handleDecrement}>Decrement</button>
            <p>{count}</p>
            
        </div>
    )
};