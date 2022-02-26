import "./SudokuSquareRow.css";
import React from "react";
import SudokuCell from "../sudoku-cell/SudokuCell";

function SudokuSquareRow(props) {

    return (
        <tr className="sudoku-square-row">
            {
                props.cells.map((cell) =>
                    <SudokuCell key={cell.id}
                                id={cell.id}
                                value={cell.value}
                                fixed={cell.fixed}
                                selected={cell.selected}
                                onClicked={props.onCellClicked}/>
                )
            }
        </tr>
    );

}

export default SudokuSquareRow;
