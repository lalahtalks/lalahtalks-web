function SignUpPassword(props) {

    return (
        <div className="mb-3 row">
            <label htmlFor="sign-up-password-input"
                   className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
                <input type="password"
                       className="form-control"
                       id="sign-up-password-input"
                       value={props.value}
                       onChange={props.onChanged}/>
            </div>
        </div>
    );

}

export default SignUpPassword;
