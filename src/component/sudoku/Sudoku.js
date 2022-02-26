import "./Sudoku.css";
import React, { useState } from "react";
import SudokuGrid from "./sudoku-grid/SudokuGrid";
import SudokuBoard from "./sudoku-board/SudokuBoard";

function Sudoku(props) {

    const [cells, setCells] = useState(props.cells);

    const getSelected = () => {
        return cells.find(cell => cell.selected === true);
    }

    const onCellClicked = (id) => {
        const selected = getSelected();
        const updated = JSON.parse(JSON.stringify(cells));

        if (selected) {
            updated[selected.id].selected = null;
            if (selected.id !== id) {
                updated[id].selected = true;
            }
        } else {
            updated[id].selected = true;
        }

        setCells(updated);
    }

    const onNumberClicked = (number) => {
        const selected = getSelected();

        if (selected) {
            const updated = JSON.parse(JSON.stringify(cells));
            const cell = updated[selected.id];
            cell.selected = null;
            cell.value = number;

            setCells(updated);
        }
    }

    return (
        <div className="sudoku">
            <SudokuGrid size={props.size} cells={cells} onCellClicked={onCellClicked}/>
            <SudokuBoard size={props.size} onNumberClicked={onNumberClicked}/>
        </div>
    );

}

export default Sudoku;
