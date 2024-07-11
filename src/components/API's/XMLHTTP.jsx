import { useState,useEffect } from "react";
import React from "react";

export function FlipKart(){

    const[products,setProducts]=useState([{title:'',price:0,image:'',rating:{rate:0,count:0,reviews:0},features:[]}] );

    useEffect(()=>{
        var http= new XMLHttpRequest();
        http.open("GET","products.json",true);
        http.send();

        http.onreadystatechange= function(){
            if(http.readyState==4){
                setProducts(JSON.parse(http.responseText))
            }
        }
    },[]);

    return(
        <div className="container-fluid">
            {
                products.map(product=>
                    <div className="row p-3 mt-3"> 
                    <div className="col-2">
                        <img src={product.image} width="100%" />
                    </div>
                    <div className="col-8">
                        <h4 className="text-primary">{product.title}</h4>
                        <div>
                            <span className="badge bg-success text-white">{product.rating.rate}<span className="bi bi-star-fill"></span></span>
                            <b className="text-secondary ms-3">{product.rating.count} Ratings & {product.rating.review} Reviews</b>

                        </div>
                        <div className="mt-2">
                            <ul className="list-unstyled">
                                {
                                    product.features.map(feature=>
                                    <li  className="mb-2"><span className="bi bi-tag-fill text-success"></span>{feature}</li>
                                    )
                                }

                            </ul>

                        </div>
                    </div>
                    <div className="col-2">
                                <div className="h3">{product.price.toLocaleString('en-in',{style:'currency', currency:'INR'})} </div>
                                
                    </div>

                    </div>
                    
                    )
            }

        </div>
    )
        
}