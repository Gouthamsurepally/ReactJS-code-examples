import axios from "axios";
import { useState,useEffect } from "react";
import { useFormik } from "formik";
import React from "react";

export function TodoApp(){
    const[appointments,setAppointments]=useState([]);
    const[toggleAdd,setToggleAdd]=useState({display:'block'});
    const[toggleEdit,setToggleEdit]=useState({display:'none'});
    const[editAppoint,setEditAppoint]=useState([{Id:0,Title:'',Date:'',Description:''}])



    function LoadAppointments(){
        axios.get('http://127.0.0.1:4000/appointments')
        .then(response=>{
            setAppointments(response.data)
        })
    }
    useEffect(()=>{
      LoadAppointments();  
    },[])

    
    const formik= useFormik({
        initialValues:{
            Id:appointments.length + 1,
            Title:"",
            Description:"",
            Date:new Date()
        },

        onSubmit:(appointment)=>{
            axios.post('http://127.0.0.1:4000/addtask',appointment)
            alert("Task added successfully..")
            window.location.reload();
        }
      
    })

    function handleDeleteClick(e){
        var id=parseInt(e.target.value);
        var flag=window.confirm(`are you sure \n want to delete ..?`);
        if(flag==true){
            axios.delete(`http://127.0.0.1:4000/deletetask/${id}`);
            window.location.reload();
        }

    }

    function handleEditClick(id){
        setToggleAdd({display:'none'});
        setToggleEdit({display:'block'});
        axios.get(`http://127.0.0.1:4000/appointments/${id}`)
        .then(response=>{
            setEditAppoint(response.data);
        })
    }

    function handleCancelClick(){
        alert("task cancled..");
        setToggleAdd({display:'block'});
        setToggleEdit({display:'none'});
    }


    const editFormik = useFormik({
        initialValues:{
            Id:editAppoint[0].Id,
            Title:editAppoint[0].Title,
            Date:`${editAppoint[0].Date.slice(0,editAppoint[0].Date.indexOf("T"))}`,
            Description:editAppoint[0].Description
        },

        enableReinitialize:true,

        onSubmit:(appointment)=>{
            axios.put(`http://127.0.0.1:4000/edittask/${editAppoint[0].Id}`,appointment);
            alert("Appointment Modified Successfully");
            window.location.reload();
        }

    })


    return(
        <div className="container-fluid">
            <h1 className="text-center">ToDo App</h1>
            <header>
                <div aria-label="AddAppointment" style={toggleAdd}>
                    <h3>Add Appointments</h3>
                    <div>
                        <form onSubmit={formik.handleSubmit} className="w-50">
                            <div className="d-flex">
                                <input type="number" name="Id" className="form-control" onChange={formik.handleChange} placeholder="Appointment Id" />
                                <input type="text" name="Title" className="form-control" onChange={formik.handleChange} placeholder="Appointment title" />
                                <input type="date" name="Date" className="form-control" onChange={formik.handleChange} />

                            </div>
                            <div className="mt-3">
                                <h4>Description</h4>
                                <textarea name="Description" className="form-control" onChange={formik.handleChange} placeholder="Appointment Description">

                                </textarea>

                            </div>
                            <div className="mt-3">
                                <button className="btn btn-primary">Add</button>

                            </div>

                        </form>
                    </div>
                </div>

                <div aria-label="EditAppointment" style={toggleEdit} >
                    <h3>Edit Appointment</h3>
                    <div>
                        <form onSubmit={editFormik.handleSubmit} className="w-50">
                            <div className="d-flex">
                                <input type="number" name="Id" className="form-control" value={editFormik.values.Id} onChange={editFormik.handleChange} placeholder="Appointment Id" />
                                <input type="text" name="Title" className="form-control" value={editFormik.values.Title} onChange={editFormik.handleChange} placeholder="Appointment title" />
                                <input type="date" name="Date" className="form-control" value={editFormik.values.Date} onChange={editFormik.handleChange} />

                            </div>
                            <div className="mt-3">
                                <h3>Description</h3>
                                <textarea name="Description" className="form-control" value={editFormik.values.Description} onChange={editFormik.handleChange} placeholder="Appointment Description" ></textarea>
                            </div>
                            <div className="mt-3">
                                  <button className="btn btn-success me-4"  >Save</button> 
                                  <button className="btn btn-danger" type="button" onClick={handleCancelClick} >Cancel</button> 
                            </div>

                        </form>
                    </div>

                </div>
               
            </header>
            <main>
                <h3>Your Appointments</h3>
                <div className="d-flex flex-wrap">
                    {
                        appointments.map(appointment=>
                        <div className="alert alert-success alert-dismissible m-2 w-25" key={appointment.Id}>
                            
                            <button className="btn btn-close" value={appointment.Id} onClick={handleDeleteClick} ></button>
                            
                            <div className="alert-title h-4">{appointment.Title}</div>
                            
                            <p>{appointment.Description}</p>
                            <span className="bi bi-calendar me-2"></span>{appointment.Date.slice(0,appointment.Date.indexOf("T"))}
                            <div className="mt-3">
                            <button onClick={()=>{handleEditClick(appointment.Id)}} className="btn btn-warning bi bi-pen-fill">Edit</button>
                            </div>
                        </div>
                            )
                    }

                </div>
            </main>

        </div>
    )
}