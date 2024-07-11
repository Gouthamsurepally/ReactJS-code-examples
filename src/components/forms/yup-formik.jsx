import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import React from "react";


export function FormikYupValidation(){

        const formik = useFormik({
            initialValues:{
                UserName:'',
                Password:'',
                Mobile:'',
                City:'',
                Gender:''
            },
            validationSchema: yup.object({
              UserName:yup.string().required("User name required").min(4,"Name too short.."),
              Password:yup.string().required("password required"),
              Mobile:yup.string().required("Mobile required").matches(/\+91\d{10}/,"Invalid Mobile")  
            }),
            onSubmit:(values)=>{
                alert(JSON.stringify(values));
            }
        })


    return(
        <div className="container-fluid">
            <form className="w-25" onSubmit={formik.handleSubmit}>
                <h3>Register User</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" className="form-control" onChange={formik.handleChange} /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="Password" className="form-control" onChange={formik.handleChange} /></dd>
                    <dd className="text-danger">{formik.errors.Password}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" className="form-control" onChange={formik.handleChange}/></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                    <dt>City</dt>
                    <dd>
                        <select className="form-select" name="City" onChange={formik.handleChange}>
                            <option value="-1">select city</option>
                            <option>Delhi</option>
                            <option>Hyderabad</option>
                            <option>Chennai</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.errors.City}</dd>
                    <dt>Gender</dt>
                    <dd>
                        <input type="radio" name="Gender" value="Male" onChange={formik.handleChange} /><label>Male</label>
                        <input type="radio" name="Gender" value="Female" onChange={formik.handleChange} /><label>Female</label>
                    </dd>
                    <dd className="text-danger">{formik.errors.Gender}</dd>
                </dl>
                <button type="submit" className="btn btn-primary w-100">Register</button>
            </form>

        </div>
    )
}