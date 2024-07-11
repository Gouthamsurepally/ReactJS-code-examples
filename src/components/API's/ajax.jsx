import { useState,useEffect } from "react";
import React from "react";
import $ from "jquery";

export function FlipKart2(){

    const[products,setProducts]=useState([{title:'',price:0,img:'',features:[],rating:{rate:0,count:0,reviews:0}}]);


    useEffect(()=>{
        $.ajax({
            method:'GET',
            url:'products.json',
            success:products => {
                setProducts(products);
            }   
        })
    },[]);

    return(
        <div className="container-fluid">
            {
                products.map(product=>
                    <div className="row mt-2 p-2 border border-secondary-subtle rounded rounded-2" >
                        <div className="col-2">
                            <img src={product.image} width="100%" />
                        </div>
                        <div className="col-8">
                            <h3 className="text-primary">{product.title}</h3>
                            <div>
                                <span className="badge bg-success text-white">{product.rating.rate}<span className="bi bi-star-fill"></span></span>
                                <b className="text-secondary ms-3">{product.rating.count} Ratings & {product.rating.reviews} Reviews</b>
                            </div>
                            <div className="mt-3">
                                <ul className="list-unstyled">
                                    {
                                        product.features.map(feature=>
                                        <li key={feature}><span className="bi bi-tag-fill text-success"></span><span className="mb-3">{feature}</span></li>
                                        )
                                    }

                                </ul>

                            </div>

                        </div>
                        <div className="col-2">
                            <div className="h2 text-success">Price:</div>
                                    <span className="h3">{product.price.toLocaleString('en-in',{style:'currency',currency:'INR'})}</span>
                        </div>

                    </div>
                    
                    )
            }

        </div>
    )
}


