import { useState } from "react";
import "./class-binding.css";


 // Css class binding

 
export function ClassBinding(){

    const [theme,setTheme] = useState('w-25');

    function handleThemeChange(e){
        if(e.target.checked){
            setTheme('dark-theme w-25');
        } else{
            setTheme('w-25');
        }
    }

    return(
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <form className={theme}>
                <div className="form-switch">
                    <input type="checkbox" onChange={handleThemeChange} className="form-check-input" />
                    <label className="form-check-label">Dark theme</label>

                </div>
                <h2 className="bi bi-person-fill">User Login</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd>
                        <input type="text" className="form-control" placeholder="Enter name" />
                    </dd>
                    <dt>Password</dt>
                    <dd>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </dd>
                </dl>
                    <button className="btn btn-dark w-100">Login</button>
            </form>
        </div>
    )
}