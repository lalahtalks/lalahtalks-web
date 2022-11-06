import {Link} from 'react-router-dom';

function NavbarSignInButton() {

    return (
        <li className="nav-item">
            <Link className="nav-link" to="/sign-in">Sign in</Link>
        </li>
    );

}

export default NavbarSignInButton;
