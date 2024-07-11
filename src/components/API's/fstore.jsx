import { useState,useEffect } from "react";
import React from "react";
import axios from "axios";

export function Fstore(){
    const[categories,setCategories]=useState([]);
    const[products,setProducts]=useState([{id:0,title:'',price:0,image:'',category:'',rating:{rate:0,count:0}}]);

    useEffect(()=>{
        LoadCategories();
        LoadProducts('http://fakestoreapi.com/products');
    },[]);

    function LoadCategories(){
        axios.get('http://fakestoreapi.com/products/categories')
        .then((response)=>{
            response.data.unshift("all");
            setCategories(response.data);
        })
    };

    function LoadProducts(url){
        axios.get(url)
        .then((response)=>{
            setProducts(response.data);
        });
    };

    function handleCategoryChange(e){
        if(e.target.value=="all"){
            LoadProducts('http://fakestoreapi.com/products');
        }else{
            LoadProducts(`http://fakestoreapi.com/products/category/${e.target.value}`);
        }
    };

    return(
        <div className="container-fluid">
            <header className="d-flex justify-content-around align-items-center bg-dark text-white p-3">
                <div>
                    <h2>FakeStore</h2>
                </div>
                <div className="fw-bold fs-4">
                    <span className="me-3">Home</span>
                    <span className="me-3">Deals</span>
                    <span>About</span>
                </div>
                <div>
                    <button className="bi bi-cart-check btn btn-primary">Cart</button>
                </div>
            </header>
            <section className="row p-4">
                <nav className="col-3">
                    <select className="form-select"  onChange={handleCategoryChange}>
                        {
                            categories.map(category=>
                            <option value={category} key={category}>{category.toUpperCase()}</option>
                            )
                        }
                    </select>
                </nav>

                <main className="col-9 d-flex flex-wrap overflow-auto" style={{height:'600px'}}>
                        {
                            products.map(product=>
                            <div className="card p-4 m-2" style={{width:'300px'}} key={product.id}>
                                <img src={product.image} width="120" height="100"/>
                                <div className="card-header">
                                    <p>{product.title}</p>

                                </div>
                                <div className="card-body">
                                   <dl>
                                    <dt>Price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd>{product.rating.rate}<span className="bi bi-star-fill bg-success text-white"></span></dd>

                                   </dl>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-warning w-100 p-2">Add to cart</button>
                                </div>

                            </div>
                            )
                        }
                </main>
            </section>

        </div>
    )
}