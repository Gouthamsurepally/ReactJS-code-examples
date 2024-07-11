import { useState,useEffect } from "react";
import React from "react";

export function InmemoryCRUD(){

        const[products,setProducts]=useState([{Id:1,Name:'TV'},{Id:2,Name:'Mobile'}]);
        const[newProduct,setNewProduct]=useState({Id:0,Name:''});


        function handleIdChange(e){
            setNewProduct({
                Id:parseInt(e.target.value),
                Name:newProduct.Name
            })
        }

        function handleNameChange(e){
            setNewProduct({
                Id:newProduct.Id,
                Name:e.target.value
            })
        }

        function handleAddClick(){
            setProducts([...products,newProduct]);
            setNewProduct({
                Id:'',
                Name:''
            })
            alert(`Product Succefully Added..`)
        }

        function handleDeleteClick(Id){
            var flag=window.confirm('sure');
            if(flag==true){
                products.splice(Id,1);
                setProducts([...products]);
                alert('Record Deleted')
            }
        }



    return(
        <div className="container-fluid">
            <h2>Testing CRUD</h2>
            <div>
                <label className="fw-bold">Add New Product</label>
            
                <div>
                  <dl>
                     <dt>Product Id</dt>
                     <dd><input type="number" value={newProduct.Id} onChange={handleIdChange} /></dd>
                     <dt>Produc Name</dt>
                     <dd><input type="text" value={newProduct.Name} onChange={handleNameChange} /></dd>
                 </dl>
                   <button onClick={handleAddClick}>Add Product</button>
              </div>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product,index)=>
                        <tr key={index}>
                            <td>{product.Name}</td>
                            <td>
                                <button className="bi bi-pen-fill btn btn-warning me-3"></button>
                                <button onClick={ ()=>{handleDeleteClick(index)} } className="bi bi-trash btn btn-danger"></button>
                            </td>
                        </tr>
                        )
                    }

                </tbody>

            </table>
        </div>
    )
}