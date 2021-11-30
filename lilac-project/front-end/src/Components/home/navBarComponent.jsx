import React from 'react'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                        <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            All categories
                        </span>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><span className="dropdown-item">Action</span></li>
                            <li><span className="dropdown-item">Another action</span></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><span className="dropdown-item">Something else here</span></li>
                        </ul>
                    </li>
                </ul>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <span className="nav-link active" aria-current="page" >Books</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link active" aria-current="page" >Electronics</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link active" aria-current="page" >Real Estate</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link active" aria-current="page" >Cars-Bikes</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link active" aria-current="page" >Toys</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link active" aria-current="page" >Music</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link active" aria-current="page" >Hobbies Games</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link active" aria-current="page" >Dom-Furniture</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link active" aria-current="page" >Kids</span>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
