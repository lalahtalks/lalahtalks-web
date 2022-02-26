import "./SudokuNumber.css";
import React from "react";

function SudokuNumber(props) {

    const handleClick = () => {
        props.onClicked(props.value);
    }

    return (
        <td className="sudoku-number" onClick={handleClick}>
            {props.value}
        </td>
    );

}

export default SudokuNumber;
