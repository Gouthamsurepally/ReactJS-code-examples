import { useState } from "react";

export function ClassBinding2(){

    const [fontChange,setFontChange]=useState('Arial');
    const [colorChange,setColorChange]=useState('#000000');
    const [sizeChange,setSizeChange]=useState('20px');
    const [textStyle,setTextStyle]=useState({fontFamily:fontChange,color:colorChange,fontSize:sizeChange})

    function handleFontChange(e){
                setFontChange(e.target.value);
    }

    function handleColorChange(e){
        setColorChange(e.target.value);
    }

    function handleSizeChange(e){
        setSizeChange(e.target.value +"px");
    }

    function buttonClickApply(){
        setTextStyle({
            fontFamily:fontChange,
            color:colorChange,
            fontSize:sizeChange
        });
    }
    return(
        <div>
            <fieldset className="w-25"  >
                <legend>Text Formatting</legend>
                <dl>
                    <dt>Font Family</dt>
                    <dd>
                        <select className="form-select" onChange={handleFontChange}>
                            <option>Select Font</option>
                            <option>Algerian</option>
                            <option>Arial</option>
                            <option>Italic</option>
                            <option>Calibri</option>
                        </select>
                    </dd>
                    <dt>Font color</dt>
                    <dd>
                        <input type="color"  className="form-control-color" onChange={handleColorChange} />
                    </dd>
                    <dt>Font size</dt>
                    <dd>
                      1  <input type="range" min="1" max="100"  className="form-range" onChange={handleSizeChange} /> 100
                    </dd>
                </dl>
                <button className="btn btn-primary" onClick={buttonClickApply}>Apply</button>
            </fieldset>
            <div align="center">
                <p style={textStyle} > Sample Text</p>
            </div>
        </div>
    )
}