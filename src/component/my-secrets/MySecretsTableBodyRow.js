function MySecretsTableBodyRow(props) {

    return (
        <tr>
            <td>{props.value.encoded.name}</td>
            <td>{props.value.encoded.username || ''}</td>
            <td>{props.value.encoded.url || ''}</td>
            <td></td>
        </tr>
    );

}

export default MySecretsTableBodyRow;
