import React from "react";

export function ObjectTypeKey(){
    var product={
        Name:"Samsung tv",
        Price:45000.00,
        Stock:"true"
    }

    return(
        <>
        <h2>Product Details</h2>
        {
            Object.keys(product).map(key=>    
            <p>{key}:{product[key]}</p>
            
            )
        }
        </>
    )
}