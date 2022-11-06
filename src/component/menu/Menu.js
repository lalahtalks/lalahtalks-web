import React from 'react';
import MenuBrand from './MenuBrand';
import Navbar from './navbar/Navbar';
import NavbarToggler from './NavbarToggler';

function Menu() {

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <MenuBrand/>
                <NavbarToggler/>
                <Navbar/>
            </div>
        </nav>
    );

}

export default Menu;
