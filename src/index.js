import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import App from './component/app/App';
import Protected from './component/auth/Protected';
import SignIn from './component/auth/SignIn';
import SignOut from './component/auth/SignOut';
import CreateSecret from './component/create-secret/CreateSecret';
import Home from './component/home/Home';
import MyAccount from './component/my-account/MyAccount';
import MySecrets from './component/my-secrets/MySecrets';
import SignUp from './component/sign-up/SignUp';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App/>}>
                    <Route path="home" element={<Home/>}/>
                    <Route path="my-account" element={<Protected component={MyAccount}/>}/>
                    <Route path="my-secrets" element={<Protected component={MySecrets}/>}/>
                    <Route path="create-secret" element={<Protected component={CreateSecret}/>}/>
                    <Route path="sign-in" element={<SignIn/>}/>
                    <Route path="sign-up" element={<SignUp/>}/>
                    <Route path="sign-out" element={<SignOut component={Home}/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
