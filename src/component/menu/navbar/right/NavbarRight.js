import NavbarRightAuthenticated from './NavbarRightAuthenticated';
import NavbarRightUnauthenticated from './NavbarRightUnauthenticated';

function NavbarRight(props) {

    return (
        <ul className="navbar-nav mb-2 mb-lg-0">
            {
                props.isAuthenticated
                    ? (
                        <NavbarRightAuthenticated/>
                    )
                    : (
                        <NavbarRightUnauthenticated/>
                    )
            }
        </ul>
    );

}

export default NavbarRight;
