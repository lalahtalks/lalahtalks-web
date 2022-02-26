import "./SudokuGrid.css";
import React from "react";
import SudokuRow from "../sudoku-row/SudokuRow";

function SudokuGrid(props) {

    const getRows = () => {
        const rows = [];
        const size = props.size;

        for (let rowIndex = 0; rowIndex < size; rowIndex++) {
            const cells = getRowCells(rowIndex);
            const item = <SudokuRow key={rowIndex}
                                    size={props.size}
                                    cells={cells}
                                    onCellClicked={props.onCellClicked}/>;
            rows.push(item);
        }

        return rows;
    }

    const getRowCells = (rowIndex) => {
        const size = props.size;
        const rowSize = size * size * size;
        const start = rowIndex * rowSize;
        const end = start + rowSize;
        return props.cells.slice(start, end);
    }

    const rows = getRows();

    return (
        <table className="sudoku-grid">
            <tbody>
            {rows}
            </tbody>
        </table>
    );

}

export default SudokuGrid;
