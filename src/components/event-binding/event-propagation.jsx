 import { useState } from "react";

 export function EventPropagation(){

    function handleNavClick(){
        alert("nav bar clicked");
    }
    
    function handleBtnClick(e){
        alert("submit button clicked");
        e.stopPropagation();
    }

    return(
        <>
        <div className="container-fluid">
            <nav onClick={handleNavClick} className="bg-dark text-white p-4 w-50">
            <h3>Nav bar</h3>
            <button onClick={handleBtnClick} className="btn btn-light">Submit</button>
            </nav>
        </div>
        </>
    )
 }