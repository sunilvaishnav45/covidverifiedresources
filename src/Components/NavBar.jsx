import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

class NavBar extends React.Component {

    render() {
        return (
            <>
                <div className="container-fluid mt-2">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <FontAwesomeIcon icon={faBuilding} />
                            <span class="ml-3">  COVID-19 INFORMATION </span>
                        </div>
                        <div className="col-12 col-md-6 text-right">
                            <a href="/cases" className="mr-3">
                                Cases
                        </a>
                            <a href="/home">
                                Hospitals
                        </a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default NavBar;