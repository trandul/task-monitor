import { useState } from "react";
export const BarBody=({dragHandler})=>{

    const[drag, setDrag] = useState(false);
    const[startPoint, setStartPoint] = useState(0);
    const onDrag=(e)=>{
        if (drag)
           dragHandler(e.pageX-startPoint);
    }

    return(
        <div 
            onPointerDown={e=>{setDrag(true); setStartPoint(e.clientX-e.target.parentElement.getBoundingClientRect().left)}}
            onPointerUp={()=>setDrag(false)}
            onPointerMove={e=>onDrag(e)}
            onPointerLeave={()=>setDrag(false)}
            //onDragStart={e=>onDrag(e)}
            //cursor: move;
            style={{
                cursor: 'move'
            }} 
            draggable="false" 
            >
        </div>
    );
}