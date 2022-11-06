import NavbarSignInButton from './NavbarSignInButton';
import NavbarSignUpButton from './NavbarSignUpButton';

function NavbarRightUnauthenticated() {

    return (
        <ul className="navbar-nav mb-2 mb-lg-0">
            <NavbarSignInButton/>
            <NavbarSignUpButton/>
        </ul>
    );

}

export default NavbarRightUnauthenticated;
