import React, {MouseEvent, useState} from "react";
import Table from "./Table";

const NavBar = () => {
    const [row, setRow] = useState(0)
    const [col, setCol] = useState(0)
    const [color, setColor] = useState('#FFFFFF')

    const addCol = () => {
        if (row === 0){
            setRow(row + 1)
        }
        setCol(col + 1)
    };
    const delCol = () => {
        if (col === 0){
            setCol(0)
            setRow(0)
        }else{
            setCol(col - 1)
        }
    };
    const addRow = () => {
        if (col === 0){
            setCol(col + 1)
        }
        setRow(row + 1)
    };
    const delRow = () => {
        if (row === 0) {
            setCol(0);
            setRow(0);
        }else{
            setRow(row - 1)
        }
    };
    const fillCells = () => {
        const cells = document.getElementsByTagName('td');
        for (let i = 0; i < cells.length; i++){
            cells[i].style.backgroundColor = color;
        }
    }
    const clearCells = () => {
        const cells = document.getElementsByTagName('td');
        for (let i = 0; i < cells.length; i++){
            cells[i].style.backgroundColor = "#FFFFFF"
        }
    }
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setColor(event.target.value)
    }

    const mouse_down = (event: MouseEvent<HTMLElement>) => {
        event.currentTarget.style.backgroundColor = color
    }

    return (
        <div>

            <div>
                <button onClick={addRow}>add row</button>
                <button onClick={addCol}>add column</button>
                <button onClick={delRow}>delete row</button>
                <button onClick={delCol}>delete column</button>
                <button onClick={fillCells}>fill</button>
                <button onClick={clearCells}>clear</button>
                <label>
                    select color
                    <select name='colors' id='colors' onChange={handleChange}>
                        <option value='#FF0000'>red</option>
                        <option value='#0000FF'>blue</option>
                        <option value='#00FF00'>green</option>
                    </select>
                </label>
            </div>
            <div>
                <Table rows={row} cols={col} mouse_down={mouse_down}/>
            </div>
        </div>
    );
}

export default NavBar;