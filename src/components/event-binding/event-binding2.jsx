import { useState } from "react";

export function EventBinding2(){

    const [msg,setMsg]=useState('');

        function DataBase(e){
            switch(e.target.name){
                case "Insert":
                    setMsg("Data Inserted");
                    break;
                case "Update":
                    setMsg("Data Updated");
                    break;
                case "Delete":
                    setMsg("Data Deleted");
                    break;               
            }
        }
    return(
        <>
        
        <h2>DataBase</h2>
        <button name="Insert" onClick={DataBase}>Insert</button>
        <button name="Update" onClick={DataBase}>Update</button>
        <button name="Delete" onClick={DataBase}>Delete</button>
        <p>{msg}</p>
        </>
    )
}