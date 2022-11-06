import {Component} from 'react';
import UserGatewayHttpApiClient from '../../http-api-client/user-gateway.http-api-client';
import MySecretsHeader from './MySecretsHeader';
import MySecretsPagination from './MySecretsPagination';
import MySecretsTable from './MySecretsTable';

class MySecrets extends Component {

    constructor(props) {
        super(props);

        this.onSearchUpdated = this.onSearchUpdated.bind(this);

        this.state = {
            paging: {
                page: 0,
                size: 10
            },
            secrets: []
        };
    }

    render() {
        return (
            <div className="container">
                <MySecretsHeader onSearchUpdated={this.onSearchUpdated}/>
                <MySecretsTable secrets={this.state.secrets}/>
                <MySecretsPagination/>
            </div>
        );
    }

    componentDidMount() {
        const request = {
            page: 0,
            size: 10
        };
        UserGatewayHttpApiClient.getMySecrets(request).then(response => {
            this.setState({
                secrets: response.data.elements
            });
        });
    }

    onSearchUpdated(event) {
        console.log(event.target.value);
    }

}

export default MySecrets;
