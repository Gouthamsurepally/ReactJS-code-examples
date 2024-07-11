import { useState } from "react";

export function CityChange(){

    const[userError,setUserError]=useState('');
    const[errorCity,setErrorCity]=useState('');

    function verifyPassword(e){
        if(e.target.value==""){
            setUserError('IFSC Code required')
        }else{
            e.target.value=e.target.value.toUpperCase();
            setUserError('');
        }
    }

    function verifyCity(e){
        if(e.target.value==-1){
            setErrorCity('please select valid city');
        }else{
            setErrorCity('city selected');
        }
    }

    return(
        <div className="container-fluid">
            <h2>Register</h2>
            <dl className="w-25">
                <dt>IFSC Code</dt>
                <dd>
                    <input type="text" placeholder="Block Letters"  onBlur={verifyPassword} className="form-control" />
                
                </dd>
                <dd className="text-danger" >{userError}</dd>
                <dt>Your city</dt>
                <dd>
                    <select onChange={verifyCity} className="form-select">
                        <option value="-1">select city</option>
                        <option>Bengaluru</option>
                        <option>Hyderabad</option>
                        <option>Delhi</option>
                        <option>Chennai</option>
                    </select>
                </dd>
                <dd className="text-primary">{errorCity}</dd>
            </dl>

        </div>
    )
}