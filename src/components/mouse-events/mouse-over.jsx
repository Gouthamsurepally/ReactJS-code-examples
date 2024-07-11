import { useState } from "react";
import './mouse-over.css';

export function MouseOver(){

    const [images] = useState(["m1.jpg","m2.jpg","m3.jpg","m4.jpg"]);
    const [preview,setPreview]=useState("m1.jpg");

    function handleMouseOver(e){
        setPreview(e.target.src);
    }


    return(
        <div className="container-fluid mt-3 p-2">
            <section className="row">
                <nav className="col-2">
                    {
                        images.map(imagePath=>
                        <div style={{width:'120px'}} className="mt-3 p-3">
                            <img src={imagePath} onMouseOver={handleMouseOver} height='100' width='100' />

                        </div>
                        )
                    }
                </nav>
                <main className="col-10">
                    <div className="mt-4 p-4" style={{height:'400px',width:'400px',overflow:'hidden'}}>
                        <img src={preview} height='400px' width='400px' />
                    </div>
                </main>
            </section>

        </div>
    )
}