import { useState } from "react";
export const SizeMarker=({resizeHandler})=>{

    const[resize, setResize] = useState(false);
    const[startPoint, setStartPoint] = useState(0);
    const[_width, setWidth] = useState(250);
    const[_startPos,setStartPos] = useState(80);
    const onResize=(e)=>{
        if (resize){
            resizeHandler(286 + (e.pageX - startPoint - e.target.offsetWidth/2));
            setWidth(e.target.parentElement.offsetWidth);
        }
    }
    const echo=(e)=>{
        console.log("pg = " + e.pageX);
        console.log("wh = " + e.target.parentElement.offsetWidth);
        console.log("sp = " + startPoint);
        console.log("total = "+( e.pageX - startPoint+_width));
    }
    return(
        <div 
            onPointerDown={e=>{setResize(true); echo(e); setStartPoint(e.clientX-e.target.parentElement.getBoundingClientRect().left);}}
            onPointerUp={(e)=>{setResize(false);console.log(resize);echo(e);}}
            onPointerMove={e=>onResize(e)}
            onPointerLeave={()=>setResize(false)}
            style={{
                cursor:'e-resize',
                background: 'red'
            }} 
            >
                <p>{resize?_width:null}</p>
        </div>
    );
}