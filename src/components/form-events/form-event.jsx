import { useState } from "react";

export function FormSubmit(){

    function handleSubmit(e){
        e.preventDefault();
        alert('Form submits to server');
    }
    return(
        <div className="container-fluid">
            <form onSubmit={handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd>
                        <input type="text" name="UserName" />
                    </dd>
                </dl>
                    <button>Submit</button>
            </form>

        </div>
    )
}