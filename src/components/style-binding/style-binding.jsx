import { useState } from "react";

export function StyleBinding(){

    const [validationStyle,setValidationStyle]= useState({border:'',boxShadow:''});
    const [displayStyle,setDisplayStyle]=useState({display:'none'});

    function handleNameChange(e){
        if (e.target.value.length<4){
            setValidationStyle({
                border:'2px solid',
                boxShadow:'2px 2px 2px red'
            })
        } else{
            setValidationStyle({
                border:'2px solid green',
                boxShadow:'2px 2px 2px green'
            })
        }
    }

    function handleCheckboxChange(e){
        if(e.target.checked){
            setDisplayStyle({
                display:'block'
            })
        } else{
            setDisplayStyle({
                display:'none'
            })
        }
    }

    return(
        <div className="container-fluid">
            <h2>Style Binding</h2>
            <dl>
                <dt>User Name</dt>
                <dd>
                    <input type="text" onChange={handleNameChange} style={validationStyle} placeholder="Name min 4 chars" />
                </dd>
                <dt>Terms Of Service</dt>
                <dd>
                    <textarea disabled>Our Terms Of Service</textarea>
                </dd>
                <dd>
                    <input type="checkbox" onChange={handleCheckboxChange} /> <label>Accept</label>
                </dd>
                <dd>
                    <button style={displayStyle}>Submit</button>
                </dd>
            </dl>

        </div>
    )
}