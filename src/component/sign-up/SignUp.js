import {Component} from 'react';
import UserGatewayHttpApiClient from '../../http-api-client/user-gateway.http-api-client';
import SignUpConfirmPassword from './SignUpConfirmPassword';
import SignUpEmail from './SignUpEmail';
import SignUpPassword from './SignUpPassword';
import SignUpSubmit from './SignUpSubmit';
import SignUpUsername from './SignUpUsername';

class SignUp extends Component {

    constructor(props) {
        super(props);

        this.onEmailChanged = this.onEmailChanged.bind(this);
        this.onUsernameChanged = this.onUsernameChanged.bind(this);
        this.onPasswordChanged = this.onPasswordChanged.bind(this);
        this.onConfirmPasswordChanged = this.onConfirmPasswordChanged.bind(this);
        this.onSubmitted = this.onSubmitted.bind(this);

        this.state = {
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        };
    }

    render() {
        return (
            <div className="card container">
                <div className="card-body">
                    <SignUpEmail value={this.state.email} onChanged={this.onEmailChanged}/>
                    <SignUpUsername value={this.state.username} onChanged={this.onUsernameChanged}/>
                    <SignUpPassword value={this.state.password} onChanged={this.onPasswordChanged}/>
                    <SignUpConfirmPassword value={this.state.confirmPassword}
                                           onChanged={this.onConfirmPasswordChanged}/>
                    <SignUpSubmit onClicked={this.onSubmitted}/>
                </div>
            </div>
        );
    }

    onEmailChanged(event) {
        this.setState({email: event.target.value});
    }

    onUsernameChanged(event) {
        this.setState({username: event.target.value});
    }

    onPasswordChanged(event) {
        this.setState({password: event.target.value});
    }

    onConfirmPasswordChanged(event) {
        this.setState({confirmPassword: event.target.value});
    }

    onSubmitted() {
        const request = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        };

        UserGatewayHttpApiClient.createMyAccount(request)
            .then(_ => {
                window.location = 'http://localhost:3000/home';
            });
    }

}

export default SignUp;
