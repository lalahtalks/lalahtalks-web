import './App.css';
import { Outlet } from "react-router-dom";
import Menu from "../menu/Menu";

function App() {
    return (
        <div className="app">
            <Menu/>
            <Outlet/>
        </div>
    );
}

export default App;
