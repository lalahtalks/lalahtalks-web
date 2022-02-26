import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/app/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CodePage from "./component/code/CodePage";
import SudokuPage from "./component/sudoku/SudokuPage";
import Home from "./component/home/Home";
import Protected from "./component/auth/Protected";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App/>}>
                    <Route path="home" element={<Home/>}/>
                    <Route path="code" element={<Protected component={CodePage}/>}/>
                    <Route path="sudoku" element={<Protected component={SudokuPage}/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
