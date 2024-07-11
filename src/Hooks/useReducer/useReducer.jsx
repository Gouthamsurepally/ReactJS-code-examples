import { useReducer } from "react";

let initialState={count:0};

function reducer(state,action){

    switch(action.type){
        case "join":  
            return {count:state.count + 1};
        case "exit":
            return {count:state.count - 1};   
    } 
}

export function ReducerDemo(){
    const[state,dispatch]=useReducer(reducer,initialState);

    function JoinClick(){
        dispatch({type:"join"});
    }

    function ExitClick(){
        dispatch({type:"exit"});
    }

    return(
        <div className="container-fluid">
            <div>
                <button onClick={JoinClick} className="btn btn-success">Join</button>
                <button onClick={ExitClick} className="btn btn-danger">Exit</button>
            </div>
            <h2>Live Broadcast</h2>
            <iframe width="400" height="300" src="https://www.youtube.com/embed/kiAK3FcwUYA"></iframe>
            <div>
                Live Viewers : {state.count}
            </div>
        </div>
    )
}