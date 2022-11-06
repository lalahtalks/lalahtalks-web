import NavbarHomeButton from './NavbarHomeButton';
import NavbarMyAccountButton from './NavbarMyAccountButton';
import NavbarMySecretsButton from './NavbarMySecretsButton';

function NavbarLeftAuthenticated() {

    return (
        <>
            <NavbarHomeButton/>
            <NavbarMyAccountButton/>
            <NavbarMySecretsButton/>
        </>
    );

}

export default NavbarLeftAuthenticated;
