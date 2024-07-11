import React from "react";

export class ProductsLogin extends React.Component
{
    constructor(){
        super();  
        this.state={
            title:"Product Details",
            product:{Name:"TV",Price:'50000'},
            categories:["All","Electronics","Fashion"]
        }
    }

    render(){
        return(
            <React.Fragment>
                <div className="container-fluid">
                    <h1>{this.state.title}</h1>
                    <dl>
                        <dt>{this.state.product.Name}</dt>
                        <dd>{this.state.product.Price}</dd>
                        <dt>Category</dt>
                        <dd>
                            <select>
                                {
                                    this.state.categories.map(category=>
                                        <option key={category}>{category}</option>
                                        )
                                }
                            </select>
                        </dd>
                    </dl>

                </div>
            </React.Fragment>
        )
    }
}