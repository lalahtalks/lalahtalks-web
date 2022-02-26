import "./SudokuRow.css";
import React from "react";
import SudokuSquare from "../sudoku-square/SudokuSquare";

function SudokuRow(props) {

    const getSquares = () => {
        const squares = [];
        const size = props.size;

        for (let squareIndex = 0; squareIndex < size; squareIndex++) {
            const cells = getSquareCells(squareIndex);
            const item = <SudokuSquare key={squareIndex}
                                       size={props.size}
                                       cells={cells}
                                       onCellClicked={props.onCellClicked}/>;
            squares.push(item);
        }

        return squares;
    }

    const getSquareCells = (squareIndex) => {
        let cells = [];
        const size = props.size;

        for (let rowIndex = 0; rowIndex < size; rowIndex++) {
            const rowCells = getSquareRowCells(squareIndex, rowIndex);
            cells = cells.concat(rowCells);
        }

        return cells;
    }

    const getSquareRowCells = (squareIndex, rowIndex) => {
        const size = props.size;
        const start = rowIndex * size * size + squareIndex * size;
        const end = start + size;
        return props.cells.slice(start, end);
    }

    const squares = getSquares();

    return (
        <tr className="sudoku-row">
            {squares}
        </tr>
    );

}

export default SudokuRow;
