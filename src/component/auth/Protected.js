import { useLocation } from "react-router-dom";
import RequestAuthentication from "./RequestAuthentication";

function Protected({ component: Component }) {

    const ID_TOKEN_KEY = "id_token";
    const ACCESS_TOKEN_KEY = "access_token";

    const location = useLocation();

    function handleHashParams() {
        if (location.hash) {
            const hashParams = new URLSearchParams(location.hash.slice(1));

            const idToken = hashParams.get(ID_TOKEN_KEY);
            if (idToken) {
                localStorage.setItem(ID_TOKEN_KEY, idToken);
            }

            const accessToken = hashParams.get(ACCESS_TOKEN_KEY);
            if (accessToken) {
                localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
            }
        }
    }

    handleHashParams();

    const isAuthenticated = localStorage.getItem(ACCESS_TOKEN_KEY);

    if (isAuthenticated) {
        return <Component/>;
    } else {
        return <RequestAuthentication/>;
    }

}

export default Protected;
