import {useLocation} from 'react-router-dom';
import OidcConstant from '../constant/OidcConstant';

function useGetOidcHashParams() {

    const location = useLocation();

    if (location.hash) {
        const hashParams = new URLSearchParams(location.hash.slice(1));

        const idToken = hashParams.get(OidcConstant.ID_TOKEN_KEY);
        if (idToken) {
            localStorage.setItem(OidcConstant.ID_TOKEN_KEY, idToken);
        }

        const accessToken = hashParams.get(OidcConstant.ACCESS_TOKEN_KEY);
        if (accessToken) {
            localStorage.setItem(OidcConstant.ACCESS_TOKEN_KEY, accessToken);
        }
    }

}

export default useGetOidcHashParams;
