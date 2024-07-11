import React from "react";
import { Box3 } from "../task2/task2";

export function Box2({bgcolor3,setBgcolor3}){
    return(
        <div className="container-fluid">
            <div className="card p-3 bg-success-subtle" style={{height:'350px',width:'350px'}}>
                <Box3 bgcolor3={bgcolor3}/>
            </div>

        </div>
    )
}