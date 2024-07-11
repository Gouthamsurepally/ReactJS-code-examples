import { useState } from "react";
import{Formik,useFormik,Form,Field,ErrorMessage} from "formik";
import * as yup from "yup";
import React from "react";

export function FormCaps(){
    return(
        <div className="container-fluid">
            <Formik 
             initialValues={{ProductId:0,Name:'',Price:0}}
             validationSchema={yup.object({
                ProductId:yup.number().required("Product required"),
                Name:yup.string().required("Name required"),
                Price:yup.number().required("price required")

             })}
                    onSubmit={(values)=>alert(JSON.stringify(values))}

            >

                <Form>
                    <h1>Register Product</h1>
                    <dl>
                        <dt>Product Id</dt>
                        <dd><Field type="number" name="ProductId"></Field></dd>
                        <dd><ErrorMessage name="ProductId" /></dd>
                        <dt>Name</dt>
                        <dd><Field type="text" name="Name"></Field></dd>
                        <dd><ErrorMessage name="Name" /></dd>
                        <dt>Price</dt>
                        <dd><Field type="number" name="Price" ></Field></dd>
                        <dd><ErrorMessage name="Price" /></dd>
                    </dl>
                    <button>Submit</button>
                </Form>

            </Formik>

        </div>
    )
}