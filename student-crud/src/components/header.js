import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item text-light mx-5">
                               <Link to='/'> Create Student Record</Link>
                            </li>
                            <li className="nav-item text-light">
                              <Link to='/studentlist'> Student List</Link>
                            </li>
                        </ul>
                        <span className="navbar-text text-light mx-5">
                            Created By Kamal Kishor
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default HeaderComponent