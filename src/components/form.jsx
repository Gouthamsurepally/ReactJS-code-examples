import React from "react";
import { useState } from "react";

export function Submission(){
    const[details,setDetails]=useState({UserName:'',Password:''});
    const[updated,setUpdated]=useState({UserName:'',Password:''})

    function handleUnameChange(e){
        setDetails({
          
            UserName:e.target.value,
             Password:details.Password
        })
    }
    function handlePasswordChange(e){
       setDetails({
        UserName:details.UserName,
        
        Password:e.target.value
       })
    }
    function handleSubmit(e){
        e.preventDefault();  
        setUpdated(details)
    }
   
    return(
        <div className="container-fluid">
            <form onSubmit={handleSubmit}>
                <dl>
                    <dt>UserName</dt>
                    <dd><input type="text" value={details.UserName} onChange={handleUnameChange} /></dd>
                    <dt>Password</dt>
                    <dd><input type="text" value={details.Password}  onChange={handlePasswordChange}  /></dd>
                </dl>
                <button>submit</button>
            </form>
            <div>
                UserName:{updated.UserName}
                Password:{updated.Password}
            </div>

        </div>
    )
}