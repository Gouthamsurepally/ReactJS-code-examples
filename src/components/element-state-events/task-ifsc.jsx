import { useState } from "react";


export function IfscTask(){

    const [userMsg,setUserMsg]=useState('');

     //conversion of input value to uppercase
  
    function handleCode(e){
     e.target.value=e.target.value.toUpperCase();
     setUserMsg('valid-code');
    }

    return(
        <div className="container-fluid">
            <h2>Registration</h2>
            <dl className="w-25"> 
            <dt>IFSC Code</dt>
            <dd>
                <input type="text" onKeyUp={handleCode} className="form-control" />
            </dd>
            <dd className="text-success">{userMsg}</dd>
           

            </dl>

        </div>
    )
}