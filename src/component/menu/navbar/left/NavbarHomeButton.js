import {Link} from 'react-router-dom';

function NavbarHomeButton() {

    return (
        <li className="nav-item">
            <Link className="nav-link" to="/home">Home</Link>
        </li>
    );

}

export default NavbarHomeButton;
