import {Link} from 'react-router-dom';

function NavbarSignOutButton() {

    return (
        <li className="nav-item">
            <Link className="nav-link" to="/sign-out">Sign out</Link>
        </li>
    );

}

export default NavbarSignOutButton;
