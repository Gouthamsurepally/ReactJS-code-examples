import { useState } from "react";

export function KeyDemo(){

    const[users]=useState([{UserId:'john'},{UserId:'john12'},{UserId:'john_nit'}]);
    const [userError,setUserError]=useState('');
    const [isUserValid,setIsUserValid]=useState(false);
    const [capsWarning,setCapsWarning]=useState({display:'block'})

    function verifyUserId(e){
        for(var user of users){
            if(user.UserId===e.target.value){
                setUserError("UserId-taken try another");
                setIsUserValid(false);
                break;
            }else{
                setUserError("UserId-available");
                setIsUserValid(true);
            }
        }
    }

    function verifyCaps(e){
        if(e.which>=65 && e.which<=90){
            setCapsWarning({dispaly:'block'});
        }else{
            setCapsWarning({display:'none'});
        }
    }


    return(
        <div className="container-fluid">
            <form>
                <h2>User Login</h2>
                <dl>
                    <dt>User</dt>
                        <dd>
                            <input type="text" onKeyUp={verifyUserId} />
                        </dd>
                        <dd className={(isUserValid)?'text-success':'text-danger'}>{userError}</dd>
                    <dt>Password</dt>
                    <dd>
                        <input type="password" onKeyPress={verifyCaps} />
                    </dd>
                    <dd className="text-warning" style={capsWarning}>
                        <div className="bi bi-exclamation-triangle">Warning-CAPS ON</div>
                    </dd>
                </dl>
            </form>

        </div>
    )
}