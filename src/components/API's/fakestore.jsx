import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

 
export function FakeStore(){
    const[categories,setCategories]=useState([]);
    const[products,setProducts]=useState([{id:0,title:'',price:0,image:'',category:'',rating:{rate:0,count:0}}]);
    const[cartItems,setCartItems]=useState([]);
    const[cartCount,setCartCount]=useState(0);
    const[toggleTable,setToggleTable]=useState({display:'none'});
    const[totalPrice,setTotalPrice]=useState(0);

    function LoadCategories(){
        axios.get("http://fakestoreapi.com/products/categories")
        .then((response)=>{
            response.data.unshift("all");
            setCategories(response.data);
        })
    };

    function LoadProducts(url){ 
        axios.get(url)
        .then((response)=>{
            setProducts(response.data)
        })
    };

    useEffect(()=>{
        LoadCategories();
        LoadProducts("http://fakestoreapi.com/products");
    },[]);

    function handleCategoryChange(e){
                if(e.target.value=="all") {
                     LoadProducts("http://fakestoreapi.com/products");
                } else {
                    LoadProducts(`http://fakestoreapi.com/products/category/${e.target.value}`);
                }
            };

    function handleAddClick(id){
        axios.get(`http://fakestoreapi.com/products/${id}`)
        .then((response)=>{
            cartItems.push(response.data);
           // setCartItems(previousItems=>[...previousItems,response.data]);
          alert(`${response.data.title}\n added successfully`);
          setCartCount(cartItems.length);
          setTotalPrice(prevPrice=>prevPrice+response.data.price);
    })
    };

    function handleCartClick(){
        setToggleTable({
            display:(toggleTable.display==="none")?"block":"none"
        })
    };

    function handleDeleteClick(id){
        axios.delete(`https://fakestoreapi.com/products/${id}`)
        .then((response)=>{
            console.log(response.data);
            setCartCount(previousCount=>previousCount - 1);
            const updatedCart=cartItems.filter(item=>item.id !== id);
            setCartItems(updatedCart);
            setTotalPrice(prevPrice=>prevPrice - response.data.price)
        })
            //alert("item deleted successfully");
    };

    useEffect(()=>{
        let price=0;
        cartItems.forEach(item=>{price=price+item.price});
        setTotalPrice(price);
       
    },[cartItems]);

    return(
        <div className="container-fluid bg-primary-subtle">
            <header className="d-flex justify-content-between bg-dark text-white p-3">
                <div>
                    <h2>Fakestore</h2>
                </div>
                <div className="fs-4">
                    <span className="me-3"><a>Home</a></span>
                    <span className="me-3"><a>Jewellery</a></span>
                    <span className="me-3"><a>Electronics</a></span>
                </div>
                <div>
                    <button onClick={handleCartClick} className="bi bi-cart-check-fill position-relative">
                        <span className="badge position-absolute rounded rounded-circle bg-danger text-white">{cartCount}</span>
                        </button>
                </div>

            </header>
            <section className="mt-3 row">
                <nav className="col-3">
                   <div className="mt-4">
                    <label>Select Category</label>
                    <select className="form-select" onChange={handleCategoryChange}>
                        {
                            categories.map(category=>
                               <option value={category} key={category}>{category.toUpperCase()}</option> 
                                )
                        }

                    </select>

                   </div>
                   <div className="mt-4">
                    
                   <table style={toggleTable}  className="table table-hover p-2 border-2">
                        <caption>Your Cart Items</caption>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Preview</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems.map(item=>
                                    <tr key={item.id}>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td><img src={item.image} width="50" height="50"/></td>
                                        <td><button onClick={()=>handleDeleteClick(item.id)} className="btn btn-danger">Delete</button></td>

                                    </tr>)
                            }
                            <tr>
                                <td colSpan="4" className=" text-center" ><strong>Total Price :{totalPrice.toFixed(2)}</strong></td>
                            </tr>
                        </tbody>
                    </table>
                   </div>

                </nav>
               
                
                <main className="col-9 overflow-auto d-flex flex-wrap" style={{height:'600px'}}>
                    {
                        products.map(product=>
                            <div className="card p-2 m-3 " style={{width:'300px'}} key={product.id}>
                                <img src={product.image} width='200' height="200"></img>
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
                                    <button  onClick={()=>handleAddClick(product.id)} className="btn btn-success bi bi-cart-check w-100">Add to cart</button>

                                </div>

                            </div>
                            )
                    }

                </main>

            </section>

        </div>
    )
}
