import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom';
import '../nav.css';

function Navbar(props) {
    return (
        <div>
            <nav>
                <div className="nav-wrapper teal darken-3">
                    <div className="container">
                        <Link to ='/' className="brand-logo">Val Memoirs</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to ="/">Home</Link></li>
                            <li><NavLink to ="/about">About</NavLink></li>
                            <li><NavLink to ="/contact">Contact</NavLink></li>
                            <li>
                                {/* <div className="wrap">
                                    <div className="search">
                                        <input type="text" className='searchTerm' placeholder="search for stories"/>
                                        <button type="submit" className="searchButton">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div> */}
                            </li>
                        </ul>
                    </div>    
                </div>
            </nav>
        </div>
    )
}

export default withRouter(Navbar)
