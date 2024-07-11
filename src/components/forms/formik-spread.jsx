// import { useState } from "react";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import React from "react";

// export function FormikYupSpreadValidation(){

//     const formik=useFormik({
//         initialValues:{
//          UserName:'',
//          Password:'',
//          Mobile:'',
//          City:'',
//          Gender:''   
//         },
//         validationSchema:yup.object({
//           UserName:yup.string().required("username required").min(4,"name too short"),
//           Password:yup.string().required("password required"),
//           Mobile:yup.string().required("mobile required").matches(/\+91\d{10}/,"invalid mobile")  
//         }),

//         onSubmit:(values)=>{
//             alert(JSON.stringify(values));
//         }
//     })

//     return(
//         <div className="container-fluid">
//             <form className="w-25" onSubmit={formik.handleSubmit}>
//                 <h3>Register User</h3>
//                 <dl>
//                     <dt>User Name</dt>
//                     <dd><input type="text" name="UserName" className="form-control" {...formik.getFieldProps("UserName")} /></dd>
//                     <dd className="text-danger">{formik.errors.UserName}</dd>
//                     <dt>Password</dt>
//                     <dd><input type="password" name="Password" className="form-control" {...formik.getFieldProps("Password")} /></dd>
//                     <dd className="text-danger">{formik.errors.Password}</dd>
//                     <dt>Mobile</dt>
//                     <dd><input type="text" name="Mobile" className="form-control" {...formik.getFieldProps("Mobile")}/></dd>
//                     <dd className="text-danger">{formik.errors.Mobile}</dd>
//                     <dt>City</dt>
//                     <dd>
//                         <select className="form-select" name="City" {...formik.getFieldProps("City")}>
//                             <option value="-1">select city</option>
//                             <option>Delhi</option>
//                             <option>Hyderabad</option>
//                             <option>Chennai</option>
//                         </select>
//                     </dd>
//                     <dd className="text-danger">{formik.errors.City}</dd>
//                     <dt>Gender</dt>
//                     <dd>
//                         <input type="radio" name="Gender" value="Male" {...formik.getFieldProps("Gender")} /><label>Male</label>
//                         <input type="radio" name="Gender" value="Female" {...formik.getFieldProps("Gender")}/><label>Female</label>
//                     </dd>
//                     <dd className="text-danger">{formik.errors.Gender}</dd>
//                 </dl>
//                 <button type="submit" className="btn btn-primary w-100">Register</button>
//             </form>

//         </div>
//     )
// }


import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";


export function Validation(){
    const formik=useFormik({
        initialValues:{
            UserName:'',
            Password:'',
            Mobile:''
        },
        validationSchema:yup.object({
            UserName:yup.string().required("userName required").min(4,"name too short"),
            Password:yup.string().required("Password required").min(5,"password too short"),
            Mobile:yup.string().required("mobile required").matches(/\+91\d{10}/,"invalid")
        }),
        onSubmit:(values)=>{
            alert(JSON.stringify(values));
        }
    })
    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h3>Registration Form</h3>
                <dl>
                    <dt>UserName</dt>
                    <dd><input type="text" name="UserName" className="form-control"{...formik.getFieldProps("UserName")}/></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="Password" className="form-control" {...formik.getFieldProps("Password")}/></dd>
                    <dd className="text-danger">{formik.errors.Password}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" className="form-control" {...formik.getFieldProps("Mobile")}/></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                </dl>
                <button className="btn btn-success">submit</button>
            </form>

        </div>
    )
}