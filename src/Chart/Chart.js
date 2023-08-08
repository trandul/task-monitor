import { Row } from "./Row/Row";
import "./Chart.css"
import { Panel } from "./Panel/Panel";
export const Chart=()=>{
    return(
      <div className="chart-wrapper">
            <Panel />
            <Row />
            <Row />
      </div>  
    );
}
