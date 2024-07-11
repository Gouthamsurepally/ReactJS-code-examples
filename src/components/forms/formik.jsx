import { useState } from "react";
import { useFormik } from "formik";
import React from "react";

export function FormikValidation(){

    function ValidateUser(userDetails){
        var error={UserName:'',Password:'',Mobile:'',City:'',Gender:''};

        if(userDetails.UserName==""){
            error.UserName="User Name Required";
        }else{
            if(userDetails.UserName.length<4){
                error.UserName="Name Too Short";
            }else{
                error.UserName=""
            }
        }

        if(userDetails.Password==""){
            error.Password="Password Required";
        }

        if(userDetails.Mobile==""){
            error.Mobile="Mobile Required";
        }else{
            if(userDetails.Mobile.match(/\+91\d{10}/)){
                error.Mobile=""
            }else{
                error.Mobile="Invalid Mobile";
            }
        }

        if(userDetails.City=="-1"){
            error.City="please select city";
        }

        if(userDetails.Gender==""){
            error.Gender="Please choose your gender";
        }

        return error;
    }

    const formik=useFormik({
        initialValues:{
            UserName:'',
            Password:'',
            Mobile:'',
            City:'',
            Gender:''
        },
        validate:ValidateUser,
        onSubmit:(values)=>{
           // console.log(values);
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