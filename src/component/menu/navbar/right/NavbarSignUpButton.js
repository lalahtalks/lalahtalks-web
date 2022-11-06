import {Link} from 'react-router-dom';

function NavbarSignUpButton() {

    return (
        <li className="nav-item">
            <Link className="nav-link" to="/sign-up">Sign up</Link>
        </li>
    );

}

export default NavbarSignUpButton;
