import MySecretsTableBodyRow from './MySecretsTableBodyRow';

function MySecretsTableBodyNotEmpty(props) {

    return props.secrets.map(secret => {
        return (
            <MySecretsTableBodyRow key={secret.id} value={secret}/>
        );
    });

}

export default MySecretsTableBodyNotEmpty;
