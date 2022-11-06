function CreateSecretName(props) {

    return (
        <div className="mb-3 row">
            <label htmlFor="create-secret-name-input"
                   className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
                <input type="text"
                       className="form-control"
                       id="create-secret-name-input"
                       value={props.value || ''}
                       onChange={props.onChanged}/>
            </div>
        </div>
    );

}

export default CreateSecretName;
