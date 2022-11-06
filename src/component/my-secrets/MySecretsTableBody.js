import MySecretsTableBodyEmpty from './MySecretsTableBodyEmpty';
import MySecretsTableBodyNotEmpty from './MySecretsTableBodyNotEmpty';

function MySecretsTableBody(props) {

    return props.secrets.length !== 0
        ? <MySecretsTableBodyNotEmpty secrets={props.secrets}/>
        : <MySecretsTableBodyEmpty/>;

}

export default MySecretsTableBody;
