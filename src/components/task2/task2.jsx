import React, { useState } from "react";

export function Box3({bgcolor3}){
    // const[color,setColor]=useState()

    return(
        <div className="card p-2 " style={{height:'250px',width:'250px',backgroundColor:bgcolor3}}>
            <h3 className="text-center mt-4">hello react</h3>
        </div>
    )
}