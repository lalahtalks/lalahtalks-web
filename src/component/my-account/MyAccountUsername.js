function MyAccountUsername(props) {

    return (
        <div className="mb-3 row">
            <label htmlFor="my-account-username-input"
                   className="col-sm-2 col-form-label">Username</label>
            <div className="col-sm-10">
                <input type="text"
                       className="form-control"
                       id="my-account-username-input"
                       value={props.value}
                       disabled/>
            </div>
        </div>
    );

}

export default MyAccountUsername;
