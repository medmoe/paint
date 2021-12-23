import React, {MouseEventHandler} from "react";

interface iProps {
    mouse_down: MouseEventHandler;
}
const Col: React.FC<iProps> = ({mouse_down}) => {
    return (
        <td onMouseDown={mouse_down}></td>
    );
}

export default Col;