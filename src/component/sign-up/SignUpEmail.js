function SignUpEmail(props) {

    return (
        <div className="mb-3 row">
            <label htmlFor="sign-up-email-input"
                   className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
                <input type="text"
                       className="form-control"
                       id="sign-up-email-input"
                       value={props.value}
                       onChange={props.onChanged}/>
            </div>
        </div>
    );

}

export default SignUpEmail;
