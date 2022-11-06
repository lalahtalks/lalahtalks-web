import {Link} from 'react-router-dom';

function NavbarMySecretsButton() {

    return (
        <li className="nav-item">
            <Link className="nav-link" to="/my-secrets">My secrets</Link>
        </li>
    );

}

export default NavbarMySecretsButton;
