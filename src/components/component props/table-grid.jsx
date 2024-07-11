import React from "react";

import { DataGrid } from "../component props/table-data";

export function TableProps(){
    return(
        <div className="container-fluid">
            <DataGrid theme={`table-primary w-50 table-striped `} caption="Employee table - updated Nov-23" fields={["First Name","Last Naame","Designation"]}
            data={[{FirstName:"Goutham",LastName:"Kumar",Designation:"CEO"},{FirstName:"Naveen" ,LastName:"Kumar",Designation:"Manager"}]} />
                <hr/>

           <DataGrid theme={`table-danger w-50 table-bordered`} caption="Product Details" fields={["Name","Price"]} data={[{Name:"TV",Price:5000},{Name:"Shoes",Price:600}]} />     
        </div>
    )
}