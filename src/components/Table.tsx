import React, {MouseEventHandler} from "react";
import Row from "./Row";

interface iprops {
    rows: number;
    cols: number;
    mouse_down: MouseEventHandler;
}

const Table: React.FC<iprops> = ({rows, cols, mouse_down}) => {
    let arr = []
    for (let i = 0; i < rows; i++){
        arr.push(<Row cols={cols} key={i} mouse_down={mouse_down}/>)
    }
    return (
        <table>
            <tbody>
            {arr}
            </tbody>
        </table>
    )
}

export default Table;