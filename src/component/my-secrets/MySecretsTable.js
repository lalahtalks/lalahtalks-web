import MySecretsTableBody from './MySecretsTableBody';
import MySecretsTableHead from './MySecretsTableHead';

function MySecretsTable(props) {

    return (
        <table className="table table-bordered table-success table-striped">
            <thead>
            <MySecretsTableHead/>
            </thead>
            <tbody>
            <MySecretsTableBody secrets={props.secrets}/>
            </tbody>
        </table>
    );

}

export default MySecretsTable;
