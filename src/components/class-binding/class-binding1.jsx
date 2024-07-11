import { useState } from "react";

 // Bootstrap classes
 
export function ClassBinding1(){

    const [theme,setTheme]=useState('w-25');
    const [buttonStyle,setButtonStyle]=useState('btn btn-dark w-100');

    function handleCheckboxChange(e){
        if(e.target.checked){
            setTheme('bg-dark text-white w-25 border border-2 p-2 rounded');
            setButtonStyle('btn btn-light w-100')
        } else{
            setTheme('w-25');
            setButtonStyle('btn btn-dark w-100');
        }
    }
    return(
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <form className={theme}>
                <div className="form-switch">
                    <input type="checkbox" className="form-check-input" onChange={handleCheckboxChange} />
                    <label className="form-check-label">Dark Mode</label>
                </div>
                <h2 className="bi bi-person-fill">User Login</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd>
                        <input type="text" placeholder="Enter name" className="form-control" />
                    </dd>
                    <dt>Password</dt>
                    <dd>
                        <input type="password" placeholder="Enter password" className="form-control" />
                    </dd>
                </dl>
                <button className={buttonStyle}>Login</button>

            </form>

        </div>
    )
}