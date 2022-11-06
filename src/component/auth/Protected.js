import useIsAuthenticated from '../../hook/useIsAuthenticated';
import RequestAuthentication from './RequestAuthentication';

function Protected({component: Component}) {

    if (useIsAuthenticated()) {
        return <Component/>;
    } else {
        return <RequestAuthentication redirectUri={window.location.href}/>;
    }

}

export default Protected;
