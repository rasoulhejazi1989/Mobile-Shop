import React, { useContext } from "react";

import "./NavBar.css";

import {BsBag} from 'react-icons/bs';

import ProductsContext from "../../contexts/ProductsContext";

const NavBar = () => {

    const contextData = useContext(ProductsContext);

    return (
        <nav  className="navbar position-fixed w-100 navbar-expand-sm py-3 d-flex">
            <div className="container">
                <a href="#" className="navbar-brand">
                    Yola Shop
                </a>

                <ul className="navbar nav me-auto ms-3">
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Home
                        </a>
                    </li>
                </ul>

                <div className="bag-box">
                    <a href="#" className="bag">
                        <BsBag className="text-white" onClick={ () => contextData.setIsShowCart(true) } />
                        <span className="bag-product-counter">0</span>
                    </a>
                </div>

            </div>
        </nav>
    );
};

export default NavBar;
