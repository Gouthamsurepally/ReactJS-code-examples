import {useState} from "react";

export function UsingState(){
    const [title] = useState('Product Details');
    const [product] = useState({Name:'Samsung TV',Price:45000.99});
    const [categories] = useState(["All","Electronics","Footware","Fashion"]);

    return(
        <>
        <h1>{title}</h1>
        <dl>
             <dt>Name</dt>
             <dd>{product.Name}</dd>
             <dt>Price</dt>
             <dd>{product.Price}</dd>
             <dt>Select Category</dt>
             <dd>
                <select>
                    {
                        categories.map(category=>
                            <option key={category}>{category}</option>
                            )
                    }
                </select>
             </dd>
        </dl>
        </>
    )
}