import React from "react";


export  class FakeStore extends React.Component
{
    constructor(){
        super();
        this.state={
            categories:[],
            products:[]
        }
    }

    LoadCategories(){
       fetch('http://fakestoreapi.com/products/categories')
       .then(response=>response.json())
       .then(categories=>{
        this.setState({
            categories:categories
        })
       })
    }

    LoadProducts(){
        fetch('http://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(products=>{
            this.setState({
                products:products
            })
        })
    }

    componentDidMount(){
        this.LoadCategories();
        this.LoadProducts();
    }

    render(){
        return(
            <React.Fragment>
                <div className="container-fluid">
                    <h2>Select Categories</h2>
                    <select>
                        {
                            this.state.categories.map(category=>
                                <option key={category}>{category}</option>
                                )
                        }
                    </select>
                    <div className="mt-4">
                        {
                            this.state.products.map(product=>
                                <img key={product.id} src={product.image} width="100" height="100" className="mt-2 me-3" />
                                )
                        }

                    </div>

                </div>
            </React.Fragment>
        )
    }
}