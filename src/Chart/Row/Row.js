import { Bar } from "../Bar/Bar";
import "./Row.css"
export const Row =()=>{
    return(
        <div className="chart-row-wrapper">
            <Bar _startPos = {48} _width = {280}/>
        </div>
    );
}