import { useState } from "react";

 export function PasswordTask(){
    const[userError,setUserError]=useState('');
    const[meter,setMeter]=useState(1);
    const[color,setColor]=useState()
    
    function handlePassword(e){
       if(e.target.value.match(/(?=.*[A-Z]\w{4,15})/)){
        setUserError("strong password");
        setMeter(100);
        setColor('text-success')

       }else{
        if(e.target.value.length<4){
            setUserError("poor password - min 4 chars required");
            setMeter(30);
            setColor('text-danger')
        } else{
            setUserError("weak password - one must be uppercase");
            setMeter(70);
            setColor('text-warning');
        }
       }
    }

    return(
        <div className="container-fluid">
            <form>
                <h2>Log IN</h2>
                <dl>
                    <dt>User Name</dt>
                    <input type="text" />
                    <dt>Password</dt>
                    <dd>
                        <input type="password" onKeyUp={handlePassword} />
                    </dd>
                    <dd >
                        <meter min="1" max="100" value={meter}></meter>
                    </dd>
                    <dd  className={color}>{userError}</dd>
                </dl>
            </form>

        </div>
    )
 }