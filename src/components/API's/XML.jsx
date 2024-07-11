import { useState,useEffect } from "react";

export function FlipCart(){

    const[product,setProduct]=useState({title:'',price:0,image:'',rating:{rate:0,count:0,reviews:0},features:[]});

    useEffect(()=>{
        var http= new XMLHttpRequest();
        http.open("get","product.json",true);
        http.send();
        http.onreadystatechange=function(){
            if(http.readyState==4){
                setProduct(JSON.parse(http.responseText));
            }
        }
    },[]);

    return(
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-4">
                    <img src={product.image} />
                </div>
                <div className="col-8">
                    <h3 className="text-primary">{product.title}</h3>
                    <div>
                        <span className="badge bg-success">{product.rating.rate} <span className="bi bi-star-fill"></span></span>
                        <span className="fw-bold ms-3 text-secondary">{product.rating.count} Ratings &{product.rating.review} Reviews</span>
                    </div>
                    <div>
                        <ul className="list-unstyled">
                            {
                                product.features.map(feature=>
                                <li key={feature} className="bi bi-tag-fill mt-4"><span>{feature}</span></li>

                                )
                            }

                        </ul>
                    </div>

                </div>

            </div>

        </div>
    )
}