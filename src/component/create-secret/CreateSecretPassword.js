function CreateSecretPassword(props) {

    return (
        <div className="mb-3 row">
            <label htmlFor="create-secret-password-input"
                   className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
                <input type="text"
                       className="form-control"
                       id="create-secret-password-input"
                       value={props.value || ''}
                       onChange={props.onChanged}/>
            </div>
        </div>
    );

}

export default CreateSecretPassword;
