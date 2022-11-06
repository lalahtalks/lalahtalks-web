import {Link} from 'react-router-dom';

function NavbarMyAccountButton() {

    return (
        <li className="nav-item">
            <Link className="nav-link" to="/my-account">My account</Link>
        </li>
    );

}

export default NavbarMyAccountButton;
