import React from "react";
import Sudoku from "./Sudoku";

const cells = [
    {
        id: 0,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 1,
        fixed: false,
        value: "4",
        selected: false
    },
    {
        id: 2,
        fixed: true,
        value: "3",
        selected: false
    },
    {
        id: 3,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 4,
        fixed: true,
        value: "7",
        selected: false
    },
    {
        id: 5,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 6,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 7,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 8,
        fixed: true,
        value: "2",
        selected: false
    },
    {
        id: 9,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 10,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 11,
        fixed: true,
        value: "5",
        selected: false
    },
    {
        id: 12,
        fixed: true,
        value: "9",
        selected: false
    },
    {
        id: 13,
        fixed: true,
        value: "6",
        selected: false
    },
    {
        id: 14,
        fixed: true,
        value: "2",
        selected: false
    },
    {
        id: 15,
        fixed: true,
        value: "4",
        selected: false
    },
    {
        id: 16,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 17,
        fixed: true,
        value: "7",
        selected: false
    },
    {
        id: 18,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 19,
        fixed: true,
        value: "2",
        selected: false
    },
    {
        id: 20,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 21,
        fixed: true,
        value: "3",
        selected: false
    },
    {
        id: 22,
        fixed: true,
        value: "4",
        selected: false
    },
    {
        id: 23,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 24,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 25,
        fixed: true,
        value: "9",
        selected: false
    },
    {
        id: 26,
        fixed: true,
        value: "1",
        selected: false
    },
    {
        id: 27,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 28,
        fixed: true,
        value: "3",
        selected: false
    },
    {
        id: 29,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 30,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 31,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 32,
        fixed: true,
        value: "7",
        selected: false
    },
    {
        id: 33,
        fixed: true,
        value: "8",
        selected: false
    },
    {
        id: 34,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 35,
        fixed: true,
        value: "5",
        selected: false
    },
    {
        id: 36,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 37,
        fixed: true,
        value: "5",
        selected: false
    },
    {
        id: 38,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 39,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 40,
        fixed: true,
        value: "9",
        selected: false
    },
    {
        id: 41,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 42,
        fixed: true,
        value: "7",
        selected: false
    },
    {
        id: 43,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 44,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 45,
        fixed: true,
        value: "4",
        selected: false
    },
    {
        id: 46,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 47,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 48,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 49,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 50,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 51,
        fixed: true,
        value: "1",
        selected: false
    },
    {
        id: 52,
        fixed: true,
        value: "6",
        selected: false
    },
    {
        id: 53,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 54,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 55,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 56,
        fixed: true,
        value: "4",
        selected: false
    },
    {
        id: 57,
        fixed: true,
        value: "5",
        selected: false
    },
    {
        id: 58,
        fixed: true,
        value: "1",
        selected: false
    },
    {
        id: 59,
        fixed: true,
        value: "9",
        selected: false
    },
    {
        id: 60,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 61,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 62,
        fixed: true,
        value: "6",
        selected: false
    },
    {
        id: 63,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 64,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 65,
        fixed: true,
        value: "6",
        selected: false
    },
    {
        id: 66,
        fixed: true,
        value: "3",
        selected: false
    },
    {
        id: 67,
        fixed: true,
        value: "2",
        selected: false
    },
    {
        id: 68,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 69,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 70,
        fixed: true,
        value: "7",
        selected: false
    },
    {
        id: 71,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 72,
        fixed: true,
        value: "9",
        selected: false
    },
    {
        id: 73,
        fixed: true,
        value: "1",
        selected: false
    },
    {
        id: 74,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 75,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 76,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 77,
        fixed: true,
        value: "7",
        selected: false
    },
    {
        id: 78,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 79,
        fixed: false,
        value: " ",
        selected: false
    },
    {
        id: 80,
        fixed: true,
        value: "4",
        selected: false
    }
];

function SudokuPage() {

    return (
        <div className="sudoku-page">
            <Sudoku size={3} cells={cells}/>
        </div>
    );

}

export default SudokuPage;
