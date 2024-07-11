
import { useState,useEffect } from "react";
import React from "react";

export function OperatonCrud(){

    const[products,setProducts]=useState([{Id:1,Name:'TV'},{Id:2,Name:'Mobile'}]);
    const[newProduct,setNewProduct]=useState({Id:0,Name:''});
    const[activeProductId,setActiveProductId]=useState(0);
    const[newName,setNewName]=useState('');

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
            products.push(newProduct);
            setProducts([...products]);
            alert(`Product Added`);
            setNewProduct({Id:0,Name:''});
        }

        function handleDeleteClick(index){
            var flag=window.confirm(`Are you sure \n want to delete?`);
            if(flag==true){
                products.splice(index,1);
                setProducts([...products]);
            }
        }

        function handleEditClick(id){
            setActiveProductId(id);
            var prod=products.find(product=>product.Id==id);
            setNewName(prod.Name);

        }

        function handleSaveClick(id){
            setActiveProductId(0);
            var editName=products.find(product=>product.Id==id);
            editName.Name=newName;
        }

        function handleNameChangeOnEdit(e){
            setNewName(e.target.value);
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
                        <dt>Name</dt>
                        <dd><input type="text" value={newProduct.Name} onChange={handleNameChange} /></dd>
                    </dl>
                    <button onClick={handleAddClick}>Add Products</button>
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
                            <td>
                                {(product.Id==activeProductId)?<input type="text" onChange={handleNameChangeOnEdit} value={newName} /> : <label>{product.Name}</label>}
                            </td>
                            <td>
                                {(product.Id==activeProductId)?<button onClick={()=>handleSaveClick(product.Id)} className="btn btn-success bi bi-floppy me-3"></button> : <button onClick={()=>handleEditClick(product.Id)} className="bi bi-pen-fill me-2 btn btn-warning"></button> }

                                <button onClick={()=>{handleDeleteClick(index)}} className="btn btn-danger bi bi-trash"></button>
                            </td>

                        </tr>
                        )
                    }
                </tbody>

            </table>

        </div>
    )
}

