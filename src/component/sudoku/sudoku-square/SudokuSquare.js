import "./SudokuSquare.css";
import React from "react";
import SudokuSquareRow from "../sudoku-square-row/SudokuSquareRow";

function SudokuSquare(props) {

    const getRows = () => {
        const rows = [];
        const size = props.size;

        for (let rowIndex = 0; rowIndex < size; rowIndex++) {
            const cells = getRowCells(rowIndex);
            const item = <SudokuSquareRow key={rowIndex}
                                          size={props.size}
                                          cells={cells}
                                          onCellClicked={props.onCellClicked}/>;
            rows.push(item);
        }

        return rows;
    }

    const getRowCells = (rowIndex) => {
        const size = props.size;
        const start = rowIndex * size;
        const end = start + size;
        return props.cells.slice(start, end);
    }

    const rows = getRows();

    return (
        <td className="sudoku-square">
            <table>
                <tbody>
                {rows}
                </tbody>
            </table>
        </td>
    );

}

export default SudokuSquare;
