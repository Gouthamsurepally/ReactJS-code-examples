import { useState } from "react";

export function PreventDefault2(){

    function handleSubmit(e){
        e.preventDefault();
        for(var i=1; i<e.target.length; i++){
           console.log(e.target[i].name);
        }
    }

    return(
        <div className="container-fluid">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="UserName" />
                <button name="Insert">Insert</button>
                <button name="Update">Update</button>
                <button name="Delete">Delete</button>
            </form>
        </div>
    )
}
