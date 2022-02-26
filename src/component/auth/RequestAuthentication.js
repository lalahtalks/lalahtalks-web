import { v4 as uuid } from "uuid";

function RequestAuthentication() {
    const generateNonce = () => {
        return uuid().slice(0, 8);
    };

    const nonce = generateNonce();
    window.location = 'http://localhost:80/auth'
        + '/realms/lalahtalks/protocol/openid-connect/auth'
        + '?response_type=id_token%20token'
        + '&scope=openid%20profile%20email'
        + '&client_id=lalahtalks-web'
        + '&nonce=' + nonce
        + '&redirect_uri=' + window.location.href;

    return null;
}

export default RequestAuthentication;
