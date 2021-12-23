import React, {MouseEventHandler} from "react";
import Col from "./Col";

interface iprops {
    cols:number
    mouse_down: MouseEventHandler;
}
const Row: React.FC<iprops> = ({cols, mouse_down}) => {
    let arr = []
    for (let i = 0; i < cols; i++){
        arr.push(<Col key={i} mouse_down={mouse_down}/>)
    }
    return (
        <tr>
            {arr}
        </tr>
    );
};

export default Row;