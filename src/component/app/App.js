import {Outlet} from 'react-router-dom';
import useGetOidcHashParams from '../../hook/useGetOidcHashParams';
import Menu from '../menu/Menu';

function App() {

    useGetOidcHashParams();

    return (
        <div>
            <Menu/>
            <br/>
            <Outlet/>
        </div>
    );

}

export default App;
