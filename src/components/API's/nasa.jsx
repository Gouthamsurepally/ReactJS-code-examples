import { useEffect, useState } from "react";
import axios from "axios";

export function Nasa(){

    const [marsObj, setMarsObj] = useState({});

    useEffect(()=>{
        axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=6ffzhNjjV1XA2HkP9u2ghEmZVMK8Rb2M2ZG4n6Fl")
        .then(response=>{
            setMarsObj(response.data);
        })
        .catch(reason => {
            console.log(reason.message);
        })
    },[]);

    return(
        <div className="container-fluid">
            <h2>Mars Rover Photos</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Photo Id</th>
                        <th>Preview</th>
                        <th>Camera</th>
                        <th>Rover</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       marsObj.photos && marsObj.photos.map(photo=>
                            <tr key={photo.id}>
                                <td>{photo.id}</td>
                                <td> 
                                    <div>
                                        <a href={photo.img_src} download className="btn mb-3"> <span className="bi bi-download"></span> </a>
                                    </div>
                                    <img  src={photo.img_src} width="150" height="150"/>
                                </td>
                                <td>
                                    {photo.camera.full_name}
                                </td>
                                <td>
                                    {photo.rover.name}
                                </td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}
