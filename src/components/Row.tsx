import React from "react";
import Col from "./Col";

interface iprops {
    cols:number;
}
const Row: React.FC<iprops> = ({cols}) => {
    let arr = []
    for (let i = 0; i < cols; i++){
        arr.push(<Col key={i}/>)
    }
    return (
        <tr>
            {arr}
        </tr>
    );
};

export default Row;