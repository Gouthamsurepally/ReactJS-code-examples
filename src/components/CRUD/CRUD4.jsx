import React, { useState } from "react";

export function Operations2() {
    const [products, setProducts] = useState([{ Id: 1, Name: 'goutham', Age: 24, City: 'hyd' }]);
    const [newProducts, setNewProducts] = useState({ Id: 0, Name: '', Age: 0, City: '' });
    const [activeProductId, setActiveProductId] = useState(0);
    const [searchText, setSearchText] = useState('');

    function handleIdChange(e) {
        setNewProducts({ ...newProducts, Id: parseInt(e.target.value) });
    }

    function handleNameChange(e) {
        setNewProducts({ ...newProducts, Name: e.target.value });
    }

    function handleAgeChange(e) {
        setNewProducts({ ...newProducts, Age: parseInt(e.target.value) });
    }

    function handleCityChange(e) {
        setNewProducts({ ...newProducts, City: e.target.value });
    }

    function handleAddClick() {
        if (activeProductId === 0) {
            setProducts([...products, newProducts]);
            setNewProducts({ Id: 0, Name: '', Age: 0, City: '' });
            alert("Details added");
        } else {
            const editDetails = products.map(product => {
                if (product.Id === activeProductId) {
                    return { ...newProducts };
                }
                return product;
            });
            setProducts(editDetails);
            setActiveProductId(0);
            alert("Details Updated");
        }
    }

    function handleEditClick(id) {
        setActiveProductId(id);
        const edit = products.find(product => product.Id === id);
        setNewProducts({ ...edit });
    }

    function handleDeleteClick(index) {
        var flag = window.confirm('Are you sure you want to delete?');
        if (flag === true) {
            const deleteProduct = [...products];
            deleteProduct.splice(index, 1);
            setProducts(deleteProduct);
            alert('Product deleted');
        }
    }

    function handleSearchInputChange(e) {
        setSearchText(e.target.value);
    }

    const filteredProducts = searchText.trim() === "" ?
        products :
        products.filter(product =>
            product.Name.toLowerCase().includes(searchText.toLowerCase())
        );

    return (
        <div className="container-fluid">
            <div className="w-25">
                <h2>{(activeProductId === 0) ? 'Add Product' : 'Update Product'}</h2>
                <dl>
                    <dt>ID</dt>
                    <dd><input type="number" value={newProducts.Id} onChange={handleIdChange} className="form-control" /></dd>
                    <dt>Name</dt>
                    <dd><input type="text" value={newProducts.Name} onChange={handleNameChange} className="form-control" /></dd>
                    <dt>Age</dt>
                    <dd><input type="number" value={newProducts.Age} onChange={handleAgeChange} className="form-control" /></dd>
                    <dt>City</dt>
                    <dd><input type="text" value={newProducts.City} onChange={handleCityChange} className="form-control" /></dd>
                </dl>
                <button className="btn btn-dark" onClick={handleAddClick}>{(activeProductId === 0) ? 'Add' : 'Save'}</button>
            </div>
            <div className="p-4 m-4 w-50">
                <div className="mb-3">
                    <input type="text" placeholder="Search by Name" value={searchText} onChange={handleSearchInputChange} className="form-control" />
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>AGE</th>
                            <th>CITY</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((product, index) =>
                            <tr key={index}>
                                <td>{product.Id}</td>
                                <td>{product.Name}</td>
                                <td>{product.Age}</td>
                                <td>{product.City}</td>
                                <td>
                                    <button className="btn btn-warning bi bi-pen me-3" onClick={() => handleEditClick(product.Id)}>Edit</button>
                                    <button className="btn btn-danger bi bi-trash" onClick={() => handleDeleteClick(index)}>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
