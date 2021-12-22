import React from "react";
import Row from "./Row";

interface iprops {
    rows: number;
    cols: number;
}

const Table: React.FC<iprops> = ({rows, cols}) => {
    let arr = []
    for (let i = 0; i < rows; i++){
        arr.push(<Row cols={cols} key={i}/>)
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