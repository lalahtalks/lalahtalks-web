import {Link} from 'react-router-dom';

function MenuBrand() {

    return (
        <Link className="navbar-brand" to="/home">
            <img src="./logo.svg" alt="Brand" width="30" height="24"/>
        </Link>
    );

}

export default MenuBrand;
