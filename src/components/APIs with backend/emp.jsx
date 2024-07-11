import axios from "axios";
import { useState,useEffect } from "react";
import { useFormik } from "formik";
import React from "react";


export function Employee(){
   const[employee,setEmployee]=useState([]);
   const[toggleAdd,setToggleAdd]=useState({display:'Block'});
   const[toggleEdit,setToggleEdit]=useState({display:'none'});
   const[editEmp,setEditEmp]=useState([{ Sno:0, EmployeeName:'',Age:0,Gender:'', Department:'',Country:'',State:'',District:'',Button1:'',Button2:''}])

   function LoadEmployees(){
    axios.get('http://127.0.0.1:8000/Employee')
    .then(response=>{
        setEmployee(response.data); 
    })
   }

   useEffect(()=>{
    LoadEmployees()
   },[]);

   const formik=useFormik({
   initialValues:{
    Sno:0,
    EmployeeName:'',
    Age:0,
    Gender:'',
    Department:'',
    Country:'',
    State:'',
    District:'',
    Button1:'',
    Button2:''
   },

   onSubmit:(employee)=>{
    axios.post('http://127.0.0.1:8000/addtask',employee);
    
    alert('Employee details added successfully..')
    window.location.reload();
   }

   });

   function handleDeleteClick(Sno){
      var flag=window.confirm(`Are you sure \n want to delete..?`);
      if(flag==true){
        axios.delete(`http://127.0.0.1:8000/deletetask/${Sno}`);

        window.location.reload();
      }
   }

function handleEditClick(Sno){
    setToggleAdd({display:'none'});
    setToggleEdit({display:'block'});
    axios.get(`http://127.0.0.1:8000/Employee/${Sno}`)
   .then(response=>{
    console.log(response.data);
        setEditEmp(response.data);
        
    })
    
}

function handleCancelClick(){
    alert("task cancled..")
    setToggleAdd({display:'block'});
    setToggleEdit({display:'none'});
}

const editFormik = useFormik({
    initialValues:{
        Sno:editEmp[0].Sno,
        EmployeeName:editEmp[0].EmployeeName ,
        Age:editEmp[0].Age ,
        Gender:editEmp[0].Gender,
        Department:editEmp[0].Department,
        Country:editEmp[0].Country,
        State:editEmp[0].State,
        District:editEmp[0].District,
    },
    enableReinitialize:true,

    onSubmit:(employee)=>{
        axios.put(`http://127.0.0.1:8000/edittask/${editEmp[0].Sno}`,employee);
        alert('Employee updated successfully..');
        window.location.reload();
    }
    
})


    return(
        <div className="container-fluid">
            <header>
                <div aria-label="AddEmployee" style={toggleAdd} >
                    <div className="border border-secondary border-2 rounded rounded-2  w-50 p-4">
                        <form onSubmit={formik.handleSubmit} className="w-75  rounded rounded-2">
                        <h4 className="text-center">Employee Registration Page</h4>
                        <dl>
                            <dt>Sno.</dt>
                            <dd><input type="number" name="Sno" onChange={formik.handleChange} placeholder="your id" className="form-control"/></dd>
                            <dt>Employee Name</dt>
                            <dd><input type="text" name="EmployeeName" onChange={formik.handleChange} placeholder="emp name" className="form-control" /></dd>
                            <dt>Age</dt>
                            <dd><input type="number" name="Age" onChange={formik.handleChange} placeholder="your age"  className="form-control" /></dd>
                            <dt>Gender</dt>
                            <dd>
                                <input type="radio" name="Gender"  onChange={formik.handleChange} value="male" className="form-check-input" /><label className="me-4">Male</label>
                                <input type="radio" name="Gender" onChange={formik.handleChange} value="female" className="form-check-input" /><label>FeMale</label>
                            </dd>
                            <dt>Department</dt>
                            <dd><input type="text" name="Department" onChange={formik.handleChange} placeholder="your dept" className="form-control" /></dd>
                            <h5>Location</h5>
                            <dt>Country</dt>
                            <dd><input type="text" name="Country" onChange={formik.handleChange} placeholder="your country"  className="form-control" /></dd>
                            <dt>State</dt>
                            <dd><input type="text" name="State"  onChange={formik.handleChange} placeholder="your state"  className="form-control" /></dd>
                            <dt>District</dt>
                            <dd><input type="text" name="District"  onChange={formik.handleChange} placeholder="your district"  className="form-control" /></dd>

                        </dl>
                        <button type="button" className="btn btn-warning me-4">Reset</button>
                       <button type="submit" className="btn btn-success">Add</button> 
                        </form>
                    
                    </div>
                    

                </div>


                 <div aria-label="EditEmployee" style={toggleEdit}>
                    <div className="border border-danger border-2 w-50 p-4">
                        <form onSubmit={editFormik.handleSubmit}  className="w-75 rounded rounded-2">
                        <h4> Edit Employee Registration Page</h4>
                        <dl>
                            <dt>Sno.</dt>
                            <dd><input type="number" name="Sno" value={editFormik.values.Sno} onChange={editFormik.handleChange} placeholder="your id" className="form-control"/></dd>
                            <dt>Employee Name</dt>
                            <dd><input type="text" name="EmployeeName" value={editFormik.values.EmployeeName} onChange={editFormik.handleChange} placeholder="emp age" className="form-control" /></dd>
                            <dt>Age</dt>
                            <dd><input type="number" name="Age" value={editFormik.values.Age} onChange={editFormik.handleChange} placeholder="your age"  className="form-control" /></dd>
                            <dt>Gender</dt>
                            <dd>
                                <input type="radio" name="Gender"  onChange={editFormik.handleChange} checked={editFormik.values.Gender === 'male'} value="male" className="form-check-input" /><label className="me-4">Male</label>
                                <input type="radio" name="Gender" onChange={editFormik.handleChange} checked={editFormik.values.Gender === 'female'} value="female" className="form-check-input" /><label>FeMale</label>
                            </dd>
                            <dt>Department</dt>
                            <dd><input type="text" name="Department" value={editFormik.values.Department} onChange={editFormik.handleChange} placeholder="your dept" className="form-control" /></dd>
                            <h5>Location</h5>
                            <dt>Country</dt>
                            <dd><input type="text" name="Country" value={editFormik.values.Country} onChange={editFormik.handleChange} placeholder="your country"  className="form-control" /></dd>
                            <dt>State</dt>
                            <dd><input type="text" name="State" value={editFormik.values.State} onChange={editFormik.handleChange} placeholder="your state"  className="form-control" /></dd>
                            <dt>District</dt>
                            <dd><input type="text" name="District" value={editFormik.values.District} onChange={editFormik.handleChange} placeholder="your district"  className="form-control" /></dd>

                        </dl>
                       
                         <button type="submit" className="btn btn-success">Update</button> 
                         <button type="button"  className="btn btn-warning ms-4" onClick={handleCancelClick} >Cancel</button>
                        </form>
                    
                    </div>
                    

                </div> 


            </header>
            <main className="mt-4">
                <div className="border border-secondary border-4 w-100 p-4">
                    <h3 className="text-center mb-2" >Employee Details</h3>

                    <table className="form-table table table-danger table-striped w-100">
                        <thead>
                            <tr>
                                
                            <th>Sno.</th>
                                <th>Emp Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Department</th>
                                <th>Country</th>
                                <th>State</th>
                                <th>District</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employee.map(employ=>(
                            <tr key={employ.Sno}>
                                
                                    <td>{employ.Sno}</td>
                                    <td>{employ.EmployeeName}</td>
                                    <td>{employ.Age}</td>
                                    <td>{employ.Gender}</td>
                                    <td>{employ.Department}</td>
                                    <td>{employ.Country}</td>
                                    <td>{employ.State}</td>
                                    <td>{employ.District}</td>
                                    <td>
                                        <button type="button" className="btn btn-primary me-2" value= {employ.Button1} onClick={()=>{handleEditClick(employ.Sno)}} > Edit</button>
                                        <button type="submit" className="btn btn-danger" value={employ.Button2} onClick={() => {handleDeleteClick(employ.Sno)}}> Delete</button>
                                    </td>
                                 
                            </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </main>

        </div>
    )
}
