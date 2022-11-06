function SignUpUsername(props) {

    return (
        <div className="mb-3 row">
            <label htmlFor="sign-up-username-input"
                   className="col-sm-2 col-form-label">Username</label>
            <div className="col-sm-10">
                <input type="text"
                       className="form-control"
                       id="sign-up-username-input"
                       value={props.value}
                       onChange={props.onChanged}/>
            </div>
        </div>
    );

}

export default SignUpUsername;
