import "./SudokuCell.css";
import React from "react";

function SudokuCell(props) {

    const getFixedOrNotClass = () => {
        return props.fixed
            ? "sudoku-cell-fixed"
            : "sudoku-cell-not-fixed";
    }

    const getSelectedOrNotClass = () => {
        return props.selected
            ? " sudoku-cell-selected"
            : "";
    }

    const handleClick = () => {
        if (!props.fixed) {
            props.onClicked(props.id);
        }
    }

    return (
        <td className={"sudoku-cell "
            + getFixedOrNotClass()
            + getSelectedOrNotClass()}
            onClick={handleClick}>
            {props.value}
        </td>
    );

}

export default SudokuCell;
