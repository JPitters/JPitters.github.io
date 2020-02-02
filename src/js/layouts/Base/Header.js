import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class Header extends Component {
    //constructor()
    state = {  }

    render() { 
        return (
            <div className="site-header d-flex w-100 h-100 p-3 mx-auto flex-column">
                <header className="masthead mb-auto">
                    <div className="inner">
                        <h3 className="masthead-brand"><a href="https://github.com/JPitters">J. Pitters</a></h3>
                        <Nav className="nav nav-masthead justify-content-center">
                            <a className="nav-link active" href="/">Home</a>
                            {/*<a className="nav-link" href="#">Projects</a>
                            <a className="nav-link" href="/about">About</a>
                            <a className="nav-link" href="#">Blog</a>*/}
                        </Nav>
                    </div>
                </header>
                {/* Nav goes here */}
            </div>
        );
    }
}
 
export default Header;