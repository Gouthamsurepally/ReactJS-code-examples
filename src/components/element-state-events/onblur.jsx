import { useState } from "react";

export function IfscCode(){

    const [userMsg,setUserMsg]=useState('');

    function handleCode(e){
        if(e.target.value==""){
            setUserMsg('IFSC code required');
        }else{
            setUserMsg('');
        }
    }

    return(
        <div className="container-fluid">
            <h2>Register</h2>
            <dl className="w-25">
                <dt>IFSC CODE</dt>
                <dd>
                    <input type="text" placeholder="BLOCK LETTERS" onBlur={handleCode} className="form-control" />
                </dd>
                <dd className="text-danger">{userMsg}</dd>
            </dl>

        </div>
    )
}