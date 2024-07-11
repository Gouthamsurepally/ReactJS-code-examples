// configuring mounting and unmounting using useEffect:

// useEffect(()=>{
//    // on mount
//    return()=>{
//     // actions on un mount
//    }
// },[])

import { useState,useEffect } from "react";

export function Register(){
    useEffect(()=>{
        console.log('register mounted');
        return()=>{
            console.log('register unmounted')
        }
    })

    return(
        <div>
            <h4>Register</h4>
        </div>
    )
}

export function Home(){
    useEffect(()=>{
        console.log('home mounted...');
        return()=>{
            console.log('home unmounted...')
        }
    })

    return(
        <div>
            <h4>Home</h4>
        </div>
    )
}

export function UserLogin(){
    const[component,setComponent]=useState();

    function homeClick(){
        setComponent(<Home />);
    }

    function registerClick(){
        setComponent(<Register/>);  
    }

    return(
        <div className="container-fluid">
            <button className="me-3" onClick={homeClick}>Home</button> <button onClick={registerClick}>Register</button>
            <div className="mt-3">
                {component}
            </div>

        </div>
    )
}

