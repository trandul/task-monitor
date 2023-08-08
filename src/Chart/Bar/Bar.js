import { useState } from "react";
import "./Bar.css"
import { SizeMarker } from "./BarItems/SizeMarker";
import { BarBody } from "./BarItems/BarBody";
export const Bar=({_startPos, _width})=>{

    const[startPos,setStartPos] = useState(_startPos);
    const[width,setWidth] = useState(_width);

    const onResize=()=>{

    }

    return(
        <div 
            className="bar-wrapper"
            style={{
                position: 'absolute',
                left: startPos+'px',
                width: width+'px',
            }} 
            >
                <SizeMarker resizeHandler={setWidth} />
                <BarBody dragHandler={setStartPos} />
                <SizeMarker resizeHandler={setWidth} />
        </div>
    );
}