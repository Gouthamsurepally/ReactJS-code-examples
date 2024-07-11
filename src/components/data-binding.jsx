import React from "react";

export function DataBinding(){
   var categories=["All","Electronics","Footware","Fashion"];
   return(
    <>
    <nav className="bg-dark text-white p-2 mt-2  d-flex justify-content-between">
        {
            categories.map(category=> <span key={category} className="me-4">{category}</span>
                )
        }
    </nav>

    <div className="btn-group-vertical">
        {
            categories.map(category=> <button key={category} className="btn btn-danger mb-1 mt-1">{category}</button>
                )
        }
    </div>

        <ol>
            {
                categories.map(category=>
                     <li key={category}>{category}</li>
                    )
            }
        </ol>  

        <select>
            {
                categories.map(category=>
                <option key={category}>{category}</option>)
            }
        </select>

        <ul className="list-unstyled">
            {
                categories.map(category=> 
                <li key={category}><input type="checkbox"/><label>{category}</label></li>)
            }
        </ul>

        <table>
            <thead>
                <tr>
                    <th>Categories</th>
                </tr>
            </thead>
            <tbody>
                {
                    categories.map(category=>
                    <tr key={category}>
                        <td className="d-flex justify-content-between"><span>{category}</span>
                        <button className="btn btn-danger bi bi-trash-fill"></button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
   )
}