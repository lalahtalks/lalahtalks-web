import useRequestAuthentication from '../../hook/useRequestAuthentication';

function RequestAuthentication(props) {

    useRequestAuthentication(props.redirectUri);
    return <></>;

}

export default RequestAuthentication;
