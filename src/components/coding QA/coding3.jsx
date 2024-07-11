// import React from "react";
// import { useState } from "react";

// export function Swapping(){
//     const[list1,setList1]=useState([{title:'item1',checked:false},{title:'item2',checked:false},{title:'item3',checked:false}]);
//     const[list2,setList2]=useState([{title:'itemA',checked:false},{title:'itemB',checked:false},{title:'itemC',checked:false}]);

//     function handleCheckBoxChange(index){
//         const updatedList1=[...list1];
//         updatedList1[index].checked = ! updatedList1[index.checked];
//         setList1(updatedList1);
//     };

//     function handleSwap(){
//         const updatedList1=[...list1];
//         const updatedList2=[...list2];
//         updatedList1.map((item,index)=>{
//             if(item.checked){
//                 const temp=updatedList1[index].title;
//                 updatedList1[index].title = updatedList2[index].title;
//                 updatedList2[index].title = temp;
//             };
//             updatedList1[index].checked= false;
//         });
//         setList1(updatedList1);
//         setList2(updatedList2);
//     }

//     return(
//         <div className="container-fluid">
//             <div>
//                 <h3>List 1</h3>
//                 <ul>
//                     {
//                         list1.map((item,index)=>
//                     <li key={index}>
//                         <input type="checkbox" onChange={()=>handleCheckBoxChange(index)} /> {item.title}
//                     </li>
//                     )
//                     }
//                 </ul>
//             </div>
//             <div>
//                 <h3>List 2</h3>
//                 <ul>
//                     {
//                         list2.map((item,index)=>
//                     <li key={index}>{item.title}</li>
//                     )
//                     }
//                 </ul>

//             </div>
//             <button onClick={handleSwap} >Swap checked items</button>
//         </div>
//     )
// }

import React,{useState} from "react";

export function Swapping(){
    const[list1,setList1]=useState([{title:'item1',checked:false},{title:'item2',checked:false},{title:'item3',checked:false}]);
    const[list2,setList2]=useState([{title:'itemA',checked:false},{title:'itemB',checked:false},{title:'itemC',checked:false}]);

    function handleCheckBoxChange(index){
        const updatedList1=[...list1];
        updatedList1[index].checked = ! updatedList1[index.checked];
        setList1(updatedList1);
    };

    function handleSwap(){
        const updatedList1=[...list1];
        const updatedList2=[...list2];
        updatedList1.map((item,index)=>{
            if(item.checked){
                const temp=updatedList1[index].title;
                updatedList1[index].title=updatedList2[index].title;
                updatedList2[index].title=temp;
            };
            updatedList1[index].checked=false;
        });
        setList1(updatedList1);
        setList2(updatedList2);
    }

    return(
        <div className="container-fluid">
            <div>
                <h3>List-1</h3>
                <ul>
                    {
                        list1.map((item,index)=>
                        <li key={index}>
                            <input type="checkbox" onChange={()=>handleCheckBoxChange(index)} /> {item.title}
                        </li>)
                    }
                </ul>
            </div>
            <div>
                <h3>List-2</h3>
                <ul>
                    {
                        list2.map((item,index)=>
                        <li key={index}>
                            {item.title}

                        </li>)
                    }
                </ul>
            </div>
            <button onClick={handleSwap} >Swap elements</button>

        </div>
    )
}