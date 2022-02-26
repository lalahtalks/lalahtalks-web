import "./Menu.css";
import React from "react";
import { Link } from "react-router-dom";

function Menu() {

    return (
        <ul className="menu">
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/code">Code</Link>
            </li>
            <li>
                <Link to="/sudoku">Sudoku</Link>
            </li>
        </ul>
    );

}

export default Menu;
