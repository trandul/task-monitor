import { useState } from "react";
export const SizeMarker=({resizeHandler})=>{

    const[resize, setResize] = useState(false);
    const[startPoint, setStartPoint] = useState(0);
    const[_width, setWidth] = useState(250);
    const[_startPos,setStartPos] = useState(80);
    const onResize=(e)=>{
        if (resize){
            resizeHandler(e.pageX-startPoint);
            setWidth(e.pageX-startPoint);
            console.log("pg = " + e.pageX);
            
            console.log("sp = " + startPoint);
        }
    }
    return(
        <div 
            onPointerDown={e=>{setResize(true); setStartPoint(e.clientX-e.target.parentElement.getBoundingClientRect().left);console.log(resize);}}
            onPointerUp={()=>{setResize(false);console.log(resize);}}
            onPointerMove={e=>onResize(e)}
            //className="chart-bar-size-marker"
            style={{
                //cursor:'e-resize'
                background: 'red'
            }} 
            >
                <p>{resize?_width:null}</p>
        </div>
    );
}