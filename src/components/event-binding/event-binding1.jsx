import React from "react";

export function EventBinding(){

    function DataBase(e){
        console.log(`
           X Position:${e.clientX} \n
           Y Position:${e.clientY} \n
           Button  Name: ${e.target.name}
       ` )
    }

    return(
        <>
        <h2>DataBase</h2>
        <button name="Insert" onClick={DataBase}>Insert</button>
        <button name="Update" onClick={DataBase}>Update</button>
        <button name="Delete" onClick={DataBase}>Delete</button>
        </>
    )
}