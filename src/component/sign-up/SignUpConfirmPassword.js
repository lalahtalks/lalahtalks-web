function SignUpConfirmPassword(props) {

    return (
        <div className="mb-3 row">
            <label htmlFor="sign-up-confirm-password-input" className="col-sm-2 col-form-label">
                Confirm
            </label>
            <div className="col-sm-10">
                <input type="password"
                       className="form-control"
                       id="sign-up-confirm-password-input"
                       value={props.value}
                       onChange={props.onChanged}/>
            </div>
        </div>
    );

}

export default SignUpConfirmPassword;
