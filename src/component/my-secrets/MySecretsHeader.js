import {PlusCircle} from 'react-bootstrap-icons';
import {Link} from 'react-router-dom';

function MySecretsHeader(props) {

    return (
        <div className="row justify-content-between" style={{marginBottom: '16px'}}>
            <div className="col-lg-3">
                <input className="form-control"
                       type="search"
                       placeholder="Search"
                       aria-label="Search"
                       onInput={props.onSearchUpdated}
                       style={{marginLeft: '0'}}/>
            </div>
            <div className="col-lg-1">
                <div className="row justify-content-end">
                    <Link to="/create-secret" className="btn btn-primary" role="button"><PlusCircle/> Create</Link>
                </div>
            </div>
        </div>
    );

}

export default MySecretsHeader;
