import jwt_decode from 'jwt-decode';
import OidcConstant from '../constant/OidcConstant';

function useIsAuthenticated() {

    const accessToken = localStorage.getItem(OidcConstant.ACCESS_TOKEN_KEY);
    if (!accessToken) {
        return false;
    }

    const expiration = jwt_decode(accessToken).exp;
    const now = new Date().getTime() / 1000;

    return now < expiration;

}

export default useIsAuthenticated;
