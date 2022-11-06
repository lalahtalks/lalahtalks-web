import useIsAuthenticated from '../../../hook/useIsAuthenticated';
import NavbarLeft from './left/NavbarLeft';
import NavbarRight from './right/NavbarRight';

function Navbar() {

    const isAuthenticated = useIsAuthenticated();

    return (
        <div className="collapse navbar-collapse" id="navbar">
            <NavbarLeft isAuthenticated={isAuthenticated}/>
            <NavbarRight isAuthenticated={isAuthenticated}/>
        </div>
    );

}

export default Navbar;
