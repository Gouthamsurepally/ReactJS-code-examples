import { useState} from "react";
import React from "react";
import { Formik, useFormik } from "formik";

export function Formik1(){

    const formik = useFormik({
        initialValues:{
            UserName:'',
            Password:'',
            Mobile:'',
            City:'',
            Gender:'',
        },
        onSubmit:(values)=>{
            alert(JSON.stringify(values));
        }
    });

    return(
        <div className="container-fluid">
            <form className="w-25" onSubmit={formik.handleSubmit}>
                <h3>Register user</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" onChange={formik.handleChange} className="form-control" /></dd>
                    
                    <dt>Password</dt>
                    <dd><input type="password" name="Password" onChange={formik.handleChange} className="form-control" /></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" onChange={formik.handleChange} className="form-control"  /></dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange} className="form-select">
                            <option>Select City</option>
                            <option>Delhi</option>
                            <option>Hyderabad</option>
                            <option>Chennai</option>
                        </select>
                    </dd>
                    <dt>Gender</dt>
                    <dd>
                        <input type="radio" name="Gender" value="Male" onChange={formik.handleChange} /><label>Male</label>
                        <input type="radio" name="Gender" value="Female" onChange={formik.handleChange} /><label>Female</label>
                    </dd>
                </dl>
                <button type="submit" className="btn btn-primary w-100">Register</button>

            </form>

        </div>
    )
}