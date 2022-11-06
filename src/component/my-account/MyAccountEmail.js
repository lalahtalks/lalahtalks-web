function MyAccountEmail(props) {

    return (
        <div className="mb-3 row">
            <label htmlFor="my-account-email-input"
                   className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
                <input type="text"
                       className="form-control"
                       id="my-account-email-input"
                       value={props.value}
                       disabled/>
            </div>
        </div>
    );

}

export default MyAccountEmail;
