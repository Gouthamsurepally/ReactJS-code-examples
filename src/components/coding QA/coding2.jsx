import { useState } from "react";

export function Coding2(){
    const[inputValue,setInputValue]=useState('');
    const[SubmittedValue,setSubmittedValue]=useState('');

    function handleChange(e){
        setInputValue(e.target.value);
    };

    function handleSubmit(e){
        e.preventDefault();
        setSubmittedValue(inputValue);
        setInputValue('');
    }
    return(
        <div className="container-fluid">
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleChange}/>
                <button>submit</button>
                <p>user text: {SubmittedValue}</p>
            </form>

        </div>
    )
}