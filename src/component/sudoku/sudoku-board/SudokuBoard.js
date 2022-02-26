import "./SudokuBoard.css";
import React from "react";
import SudokuNumber from "../sudoku-number/SudokuNumber";

function SudokuBoard(props) {

    const getNumbers = () => {
        const size = props.size;
        const numberMaxValue = size * size;
        const numbers = [];

        for (let i = 1; i <= numberMaxValue; i++) {
            const number = <SudokuNumber key={i} value={i} onClicked={props.onNumberClicked}/>;
            numbers.push(number);
        }

        return numbers;
    }

    const numbers = getNumbers();

    return (
        <table className="sudoku-board">
            <tbody>
            <tr>
                {numbers}
            </tr>
            </tbody>
        </table>
    );

}

export default SudokuBoard;
