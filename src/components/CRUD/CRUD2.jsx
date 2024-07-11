import React, { useState } from "react";

export function Operations() {
  const [products, setProducts] = useState([ {Id: 1, Name: 'Shoes', Age: 25, City: 'New York' } ]);
  const [newProducts, setNewProducts] = useState({Id: 0, Name: '', Age: 0, City: ''});
  const [activeProductsId, setActiveProductId] = useState(0);

  function handleIdChange(e) {
    setNewProducts({
      ...newProducts,
      Id: parseInt(e.target.value)
    });
  };

  function handleNameChange(e) {
    setNewProducts({
      ...newProducts,
      Name: e.target.value
    });
  };

  function handleAgeChange(e) {
    setNewProducts({
      ...newProducts,
      Age: parseInt(e.target.value)
    });
  };

  function handleCityChange(e) {
    setNewProducts({
      ...newProducts,
      City: e.target.value
    });
  };

  function handleAddClick() {
    // Check if we are adding a new product or editing an existing one
    if (activeProductsId === 0) {
      // If no product is being edited (activeProductsId === 0), add a new product
      setProducts([...products, newProducts]);
      // Reset the newProducts state to prepare for adding another product
      setNewProducts({ Id: 0, Name: '', Age: 0, City: '' });
      // Show an alert indicating that a new product has been added
      alert("New product added...");
    } else {
      // If a product is being edited, update the existing product
      const updatedProducts = products.map(product => {
        if (product.Id === activeProductsId) {
          // If the product Id matches the activeProductsId (i.e., the product being edited), update it
          return { ...newProducts }; // Update the product details with the newProducts state
        }
        return product; // If not the product being edited, return it as is
      });
      // Update the products state with the updatedProducts array
      setProducts(updatedProducts);
      // Reset the activeProductsId to indicate that no product is being edited
      setActiveProductId(0);
      // Show an alert indicating that the product has been updated
      alert("Product updated...");
    }
  }
  

  function handleEditClick(id) {
    setActiveProductId(id);
    const editProduct = products.find(product => product.Id === id);
    setNewProducts({ ...editProduct });
    
  };

  function handleDeleteClick(index) {
    const flag = window.confirm('Are you sure you want to delete?');
    if (flag === true) {
      const updatedProducts = [...products]; 
      updatedProducts.splice(index, 1);
      setProducts(updatedProducts);
      alert('Product deleted');
    }
  };

  return (
    <div className="container-fluid">
      <div className="w-25 p-4">
        <h3>{activeProductsId === 0 ? 'Add Products' : 'Edit Product'}</h3>
        <dl>
          <dt>Product Id</dt>
          <dd><input type="number" value={newProducts.Id} onChange={handleIdChange} className="form-control" /></dd>
          <dt>Product Name</dt>
          <dd><input type="text" value={newProducts.Name} onChange={handleNameChange} className="form-control" /></dd>
          <dt>Age</dt>
          <dd><input type="number" value={newProducts.Age} onChange={handleAgeChange} className="form-control" /></dd>
          <dt>City</dt>
          <dd><input type="text" value={newProducts.City} onChange={handleCityChange} className="form-control" /></dd>
        </dl>
        <button className="btn btn-dark" onClick={handleAddClick}>{activeProductsId === 0 ? 'Add Product' : 'Save'}</button>
      </div>
      <div>
        <table className="table table-hover p-4 w-50">
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
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.Id}</td>
                <td>{product.Name}</td>
                <td>{product.Age}</td>
                <td>{product.City}</td>
                <td>
                  <button className="bi bi-pen btn btn-warning me-3" onClick={() => handleEditClick(product.Id)}>Edit</button>
                  <button className="btn btn-danger bi bi-trash" onClick={() => { handleDeleteClick(index) }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
