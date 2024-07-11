import { useState } from "react";


export function RangeExpression(){

    const [errorMsg,setErrorMsg]=useState('');
    const [progressColor,setProgressColor]=useState('');
    const [colorStrength,setColorStrength]=useState({width:''});

        function handlePassword(e){
            if(e.target.value.match(/(?=.*[A-Z]\w{4,15})/)){
                setErrorMsg('Strong password');
                setProgressColor('bg-success');
                setColorStrength({width:'100%'})
            }else{
                if(e.target.value.length<4){
                    setErrorMsg('Poor password-atleast one uppercase and 4-15 chars required');
                    setProgressColor('bg-danger');
                    setColorStrength({width:'30%'})
                } else{
                    setErrorMsg('weak password-atleast one uppercase required');
                    setProgressColor('bg-warning');
                    setColorStrength({width:'70%'})
                }
            }
        }

    return(
        <div className="container-fluid">
            <h2>Register</h2>
            <dl className="w-50">
                <dt>Password</dt>
                <dd>
                    <input type="password" className="form-control" onKeyUp={handlePassword} />
                    <div className="progress mt-3">
                        <div className={`progress-bar progress-bar-animated progress-bar-striped mt-1 ${progressColor}`} style={colorStrength} >
                            {errorMsg}
                        </div>

                    </div>
                </dd>
            </dl>

        </div>
    )
}