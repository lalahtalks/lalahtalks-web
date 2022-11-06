import useRequestAuthentication from '../../hook/useRequestAuthentication';

function SignIn() {

    const redirectUri = window.location.protocol
        + '//'
        + window.location.host
        + '/home';

    useRequestAuthentication(redirectUri);

    return (
        <></>
    );

}

export default SignIn;
