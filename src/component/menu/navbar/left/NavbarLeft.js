import NavbarLeftAuthenticated from './NavbarLeftAuthenticated';
import NavbarLeftUnauthenticated from './NavbarLeftUnauthenticated';

function NavbarLeft(props) {

    return (
        <ul className="navbar-nav mb-2 mb-lg-0">
            {
                props.isAuthenticated
                    ? (
                        <NavbarLeftAuthenticated/>
                    )
                    : (
                        <NavbarLeftUnauthenticated/>
                    )
            }
        </ul>
    );

}

export default NavbarLeft;
