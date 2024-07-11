import {useState} from "react";

export function NameChange(){
    const [userName,setUserName] = useState('Goutham');

    function handleNameChange(e){
        setUserName(e.target.value);

    }

    return(
        <>
        <h2>Edit Name</h2>
        User Name:  <input type="text" value={userName} onChange={handleNameChange} />
        <p>Hello..! {userName}</p>
        </>
    )
}