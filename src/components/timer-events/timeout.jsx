import { useState } from "react";

export function TimeOut(){
    const[volume,SetVolume]=useState('');

    function msg1(){
        SetVolume('volume increased to 1');
    }
    function msg2(){
        SetVolume('volume increased to 2');
    }
    function msg3(){
        SetVolume('volume increased to 3');
    }
    function msg4(){
        SetVolume('volume increased to 4');
    }

    function volumeClick(){
        setTimeout(msg1,2000);
        setTimeout(msg2,4000);
        setTimeout(msg3,6000);
        setTimeout(msg4,8000);
    }

    return(
        <div className="container-fluid">
            <div>
                <button className="btn btn-primary ms-3" onClick={volumeClick}>+</button>
                <h2>{volume}</h2>
            </div>

        </div>
    )
}