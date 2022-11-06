import axios from 'axios';
import APP_CONFIGURATION from '../AppConfiguration';
import OidcConstant from '../constant/OidcConstant';

const UserGatewayHttpApiClient = {

    getMyAccount: () => {
        const accessToken = localStorage.getItem(OidcConstant.ACCESS_TOKEN_KEY);
        const config = {
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        };
        return axios.get(`${APP_CONFIGURATION.userGatewayServerUri}/my-account`, config);
    },

    createMyAccount: request => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return axios.post(`${APP_CONFIGURATION.userGatewayServerUri}/my-account`, JSON.stringify(request), config);
    },

    getMySecrets: request => {
        const accessToken = localStorage.getItem(OidcConstant.ACCESS_TOKEN_KEY);
        const config = {
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        };
        return axios.get(`${APP_CONFIGURATION.userGatewayServerUri}/my-secrets?page=${request.page}&size=${request.size}`, config);
    },

    createSecret: request => {
        const accessToken = localStorage.getItem(OidcConstant.ACCESS_TOKEN_KEY);
        const config = {
            headers: {
                Authorization: 'Bearer ' + accessToken,
                'Content-Type': 'application/json'
            }
        };
        return axios.post(`${APP_CONFIGURATION.userGatewayServerUri}/my-secrets`, JSON.stringify(request), config);
    }

};

export default UserGatewayHttpApiClient;
