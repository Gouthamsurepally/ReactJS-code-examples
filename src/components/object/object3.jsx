import React from "react";

export function ArrayObject(){
    var menu = [
        {Category: "Electronics", Products:["Televisions", "Mobiles", "Watches"]},
        {Category: "Fashion", Products: ["Men Fashion", "Kids Fashion", "Women Fashion"]}
    ];
    return(
        <>
        <ol>
            {
                menu.map(item=>
                    <li key={item.Category}>{item.Category}
                        <ul>
                            {
                                item.Products.map(product=>
                                    <li key={product}>{product}</li>)
                            }
                        </ul>
                    </li>
                     )
            }
        </ol>
        </>
    )
}