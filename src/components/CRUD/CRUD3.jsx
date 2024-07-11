import React,{useState} from "react";

export function Operations1(){
    const[products,setProducts]=useState([{Id:1,Name:"Goutham",Age:24,City:'Hyd'}]);
    const[newProducts,setNewProducts]=useState({Id:0,Name:'',Age:0,City:''});
    const[activeProductId,setActiveProductId]=useState(0);
    const[searchName,setSearchName]=useState('');

    function handleIdChange(e){
        setNewProducts({...newProducts,Id:parseInt(e.target.value)});
    };

    function handleNameChange(e){
        setNewProducts({...newProducts,Name:e.target.value});
    };

    function handleAgeChange(e){
        setNewProducts({...newProducts,Age:parseInt(e.target.value)});
    };

    function handleCityChange(e){
        setNewProducts({...newProducts,City:e.target.value});
    };

    function handleAddClick(){
        if(activeProductId===0){
            setProducts([...products,newProducts]);
            setNewProducts({Id:0,Name:'',Age:0,City:''});
            alert("product added..");
        }else{
            const updateDetails=products.map(product=>{
                if(product.Id===activeProductId){
                    return {...newProducts};
                } else{
                    return product;
                }
            });
            setProducts(updateDetails);
            setActiveProductId(0);
            setNewProducts({Id:0,Name:'',Age:0,City:''});
            alert("product Updated");
        }
    };

    function handleEditClick(id){
        setActiveProductId(id);
        const edit=products.find(product=>product.Id===id);
        setNewProducts({...edit});
    };

    function handleDeleteClick(index){
        var flag=window.confirm('are you sure \n want to delete ..?');
        if(flag==true){
            const deleteProduct=[...products];
            deleteProduct.splice(index,1);
            setProducts(deleteProduct);
            setActiveProductId(0);
            alert('product deleted..')
        }
    };

    function handleSearchChange(e){
        setSearchName(e.target.value)
    };

    const filteredProducts= searchName.trim()===""? products : products.filter(product=>product.Name.toLowerCase().includes(searchName.toLowerCase()));

    return(
        <div className="container-fluid">
            <div className="w-25 p-4">
                <h3>{(activeProductId===0)?'Add Product':'Edit Product'}</h3>
                <dl>
                    <dt>Id</dt>
                    <dd><input type="number" value={newProducts.Id} onChange={handleIdChange} className="form-control"/></dd>
                    <dt>Name</dt>
                    <dd><input type="text" value={newProducts.Name} onChange={handleNameChange} className="form-control" /></dd>
                    <dt>Age</dt>
                    <dd><input type="number" value={newProducts.Age} onChange={handleAgeChange} className="form-control" /></dd>
                    <dt>City</dt>
                    <dd><input type="text" value={newProducts.City} onChange={handleCityChange} className="form-control" /></dd>
                </dl>
                <button className="btn btn-dark" onClick={handleAddClick}>{(activeProductId===0)?'Add':'Update'}</button>
            </div>
            <div className="w-50 p-4">
                <div>
                    <input type="text" value={searchName} onChange={handleSearchChange} placeholder="serach by name" className="form-control" />
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredProducts.map((product,index)=>
                            <tr key={index}>
                                <td>{product.Id}</td>
                                <td>{product.Name}</td>
                                <td>{product.Age}</td>
                                <td>{product.City}</td>
                                <td>
                                    <button className="btn btn-warning bi bi-pen" onClick={()=>handleEditClick(product.Id)} >Edit</button>
                                    <button className="btn btn-danger bi bi-trash" onClick={()=>handleDeleteClick(index)}>Delete</button>
                                </td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}