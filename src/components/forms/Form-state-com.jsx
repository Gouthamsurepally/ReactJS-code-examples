import { useState } from "react";
import { Formik,UseFormik,Form,Field,ErrorMessage } from "formik";
import * as yup from "yup";
import React from "react";

export function FormStateValidation(){

    return(
     <div className="container-fluid">
        <Formik
        initialValues={{ProductId:0,Name:'',Price:0}}
        validationSchema={yup.object({
           ProductId:yup.number().required("Product id required"),
            Name:yup.string().required("Product name required"),
           Price:yup.string().required("Price required") 
        })}

        onSubmit={(values)=> alert(JSON.stringify(values))}
        
        >
            {
                form=>
                <Form>
                    <h3>Register Product</h3>
                    <dl>
                        <dt>Product Id</dt>
                        <dd><Field type="number" name="ProductId" /></dd>
                        <dd className="text-danger"><ErrorMessage name="ProductId" /></dd>
                        <dt>Name</dt>
                        <dd><Field type="text" name="Name" /></dd>
                        <dd className="text-danger"><ErrorMessage name="Name" /></dd>
                        <dt>Price</dt>
                        <dd><Field type="number" name="Price" /></dd>
                        <dd className="text-danger"><ErrorMessage name="Price" /></dd>
                    </dl>
                    <button disabled={(form.isValid)?false:true}>Register</button>
                    <button style={{dispaly:(form.dirty)?'inline':'none'}} className="ms-3" >Save</button>

                </Form>
            }
        </Formik>
     </div>
    )
}