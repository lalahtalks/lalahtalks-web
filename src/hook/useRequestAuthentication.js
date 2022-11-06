import {v4 as uuid} from 'uuid';
import AppConfiguration from '../AppConfiguration';

function useRequestAuthentication(redirectUri) {

    const nonce = uuid().slice(0, 8);
    window.location = AppConfiguration.authServerUri
        + '/realms/lalahtalks/protocol/openid-connect/auth'
        + '?response_type=id_token%20token'
        + '&scope=openid%20profile%20email'
        + '&client_id=lalahtalks-web'
        + '&nonce=' + nonce
        + '&redirect_uri=' + redirectUri;

}

export default useRequestAuthentication;
