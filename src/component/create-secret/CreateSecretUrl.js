function CreateSecretUrl(props) {

    return (
        <div className="mb-3 row">
            <label htmlFor="create-secret-url-input"
                   className="col-sm-2 col-form-label">URL</label>
            <div className="col-sm-10">
                <input type="text"
                       className="form-control"
                       id="create-secret-url-input"
                       value={props.value || ''}
                       onChange={props.onChanged}/>
            </div>
        </div>
    );

}

export default CreateSecretUrl;
