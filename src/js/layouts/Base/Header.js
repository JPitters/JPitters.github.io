import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class Header extends Component {
    //constructor()
    //state = {  }

    render() { 
        return (
            <section className="site-head">
                <div className="nav-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <div className="masthead mb-auto">
                        <div className="inner">
                            <h3 className="masthead-brand"><a href="https://github.com/JPitters"  target="_blank" rel="noopener noreferrer">J. Pitters</a></h3>
                            <Nav className="nav nav-masthead justify-content-center">
                                <a className="nav-link active" href="/">Home</a>
                                {/*<a className="nav-link" href="#">Projects</a>
                                <a className="nav-link" href="/about">About</a>
                                <a className="nav-link" href="#">Blog</a>*/}
                            </Nav>
                        </div>
                    </div>
                </div>
                
                {/* rest goes here */}
                <div className="header-content-container mx-auto">
                    <div className="content-header">
                        <h2>Jordan Pitters</h2>
                    </div>
                    <div className="contact-info-container row">
                        <div className="contact-source col">
                            LinkedIn
                        </div>
                        <div className="contact-source col">
                            Github
                        </div>
                        <div className="contact-source col">
                            Resume
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Header;