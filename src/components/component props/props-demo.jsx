
import React from "react";

import { UserLogin } from "../component props/user-login";
export function PropsDemo(){
    return(
        <div className="container-fluid">
            <h2>Shopping Home</h2>
            <UserLogin Theme="w-50 bg-danger text-white p-2" Title="User Login"
              UserLabel="Your Email" UserType="email" Verify="Your OTP" VerifyType="number" ButtonType="btn btn-light w-100" />
              <hr/>

              <UserLogin Theme="w-50 bg-dark text-white p-2" Title="Admin Login" UserLabel="Mobile"
                UserType="text" Verify="Your OTP" VerifyType="number" ButtonType="btn btn-light w-100" />

        </div>
    )
}