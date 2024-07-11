import React from "react";

export function DataGrid(props){
    return(
        <div className="container-fluid">
            <table className={`table table-hover caption-top ${props.theme}`}>
                <caption>{props.caption}</caption>
                <thead>
                    <tr>
                        {
                            props.fields.map(field=>
                               <th key={field}>{field}</th>
                                )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map(item=>
                            <tr key={item}>{
                                Object.keys(item).map(key=>
                                    <td key={key}>{item[key]}</td>
                                    )
                            }</tr>
                            )
                    }
                </tbody>

            </table>

        </div>
    )
}