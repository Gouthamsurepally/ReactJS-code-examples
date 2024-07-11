import { useState } from "react";

export function  PreventDefault(){

    function handleSubmitClick(e){
        alert("Form will submit data to its server-API");
        e.PreventDefault();
    }

    return(
        <div className="container-fluid">
            <form onSubmit={handleSubmitClick}>
                UserName<input type="text" name="UserName" />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}