import React, { Fragment } from 'react';

const Navbar = () => {
    return ( 
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-brown p-fixed fullwidth">
                <div className="container p-relative">
                <a className="navbar-brand p-absolute color-black" href="#"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <div className="d-table fullsize fullnormal-lg m-0-auto">
                        <div className="d-table-cell v-middle">
                            <ul className="navbar-nav m-0-auto">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Proyecto</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Galería</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Apartamentos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Mapa</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contacto</a> 
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                </div>
            </nav>
        </Fragment>
     );
}
 
export default Navbar;