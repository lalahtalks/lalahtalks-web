import {Component} from 'react';
import UserGatewayHttpApiClient from '../../http-api-client/user-gateway.http-api-client';
import CreateSecretName from './CreateSecretName';
import CreateSecretPassword from './CreateSecretPassword';
import CreateSecretSubmit from './CreateSecretSubmit';
import CreateSecretUrl from './CreateSecretUrl';
import CreateSecretUsername from './CreateSecretUsername';

class CreateSecret extends Component {

    constructor(props) {
        super(props);

        this.onNameChanged = this.onNameChanged.bind(this);
        this.onUrlChanged = this.onUrlChanged.bind(this);
        this.onUsernameChanged = this.onUsernameChanged.bind(this);
        this.onPasswordChanged = this.onPasswordChanged.bind(this);
        this.onSubmitted = this.onSubmitted.bind(this);

        this.state = {
            name: null,
            url: null,
            username: null,
            password: null
        };
    }

    render() {
        return (
            <div className="card container">
                <div className="card-body">
                    <CreateSecretName value={this.state.name} onChanged={this.onNameChanged}/>
                    <CreateSecretUrl value={this.state.url} onChanged={this.onUrlChanged}/>
                    <CreateSecretUsername value={this.state.username} onChanged={this.onUsernameChanged}/>
                    <CreateSecretPassword value={this.state.password} onChanged={this.onPasswordChanged}/>
                    <CreateSecretSubmit onClicked={this.onSubmitted}/>
                </div>
            </div>
        );
    }

    onNameChanged(event) {
        this.setState({name: event.target.value});
    }

    onUrlChanged(event) {
        this.setState({url: event.target.value});
    }

    onUsernameChanged(event) {
        this.setState({username: event.target.value});
    }

    onPasswordChanged(event) {
        this.setState({password: event.target.value});
    }

    onSubmitted() {
        const request = {
            encoded: {
                name: this.state.name,
                url: this.state.url,
                username: this.state.username,
                password: this.state.password
            }
        };

        UserGatewayHttpApiClient.createSecret(request)
            .then(_ => {
                window.location = 'http://localhost:3000/my-secrets';
            });
    }

}

export default CreateSecret;
