function CreateSecretUsername(props) {

    return (
        <div className="mb-3 row">
            <label htmlFor="create-secret-username-input"
                   className="col-sm-2 col-form-label">Username</label>
            <div className="col-sm-10">
                <input type="text"
                       className="form-control"
                       id="create-secret-username-input"
                       value={props.value || ''}
                       onChange={props.onChanged}/>
            </div>
        </div>
    );

}

export default CreateSecretUsername;
