import React from "react";

export function ObjectType(){

    var product={
        Name:"Samsung TV",
        Price:45000,
        Stock:true,
        Cities:["Delhi","Hyd","Bng"],
        Rating:{Rate:4.5,Count:3000}
        
    }

    return(
        <>
        <h2>Product Details</h2>
        <dl>
            <dt>Name</dt>
            <dd>{product.Name}</dd>
            <dt>Price</dt>
            <dd>{product.Price}</dd>
            <dt>Stock</dt>
            <dd>{(product.Stock===true)?"Available":"Out of stock"}</dd>
            <dt>Shipped to</dt>
            <dd>
                <ol>
                    {
                    product.Cities.map(city=>
                    <li key={city}>{city}</li>)
                    }   
                </ol>
            </dd>
            <dt>Rating</dt>
            <dd>
                {product.Rating.Rate}<span className="bi bi-star-fill text-success"></span>[{product.Rating.Count}]
            </dd>
        </dl>
        </>
    )

}