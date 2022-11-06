import {Component} from 'react';
import UserGatewayHttpApiClient from '../../http-api-client/user-gateway.http-api-client';
import MyAccountEmail from './MyAccountEmail';
import MyAccountUsername from './MyAccountUsername';

class MyAccount extends Component {

    constructor(props) {
        super(props);

        this.fetchAccount = this.fetchAccount.bind(this);

        this.state = {
            account: {
                email: '',
                username: ''
            }
        };
    }

    componentDidMount() {
        this.fetchAccount();
    }

    render() {
        return (
            <div className="container">
                <MyAccountEmail value={this.state.account.email}/>
                <MyAccountUsername value={this.state.account.username}/>
            </div>
        );
    }

    fetchAccount = () => {
        UserGatewayHttpApiClient.getMyAccount().then(response => {
            this.setState({
                account: response.data
            });
        });
    };

}

export default MyAccount;
