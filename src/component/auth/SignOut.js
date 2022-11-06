import OidcConstant from '../../constant/OidcConstant';

function SignOut() {

    localStorage.removeItem(OidcConstant.ID_TOKEN_KEY);
    localStorage.removeItem(OidcConstant.ACCESS_TOKEN_KEY);

    window.location = '/home';

    return (
        <></>
    );

}

export default SignOut;
