import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                    <div className="content-head">
                        <h1>Full Stack Software Developer</h1>
                    </div>
                    <div className="content-main">
                        <div className="content-actions row">
                            <div className="contact-source col">
                                <a href="" target="_blank">
                                    <FontAwesomeIcon icon={['fab', 'linkedin']} size="md" />
                                    <br />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                            <div className="contact-source col">
                                <a href="" target="_blank">
                                    <FontAwesomeIcon icon={['fab', 'github']} size="md"/>
                                    <br />
                                    <span>Github</span>
                                </a>
                            </div>
                            <div className="contact-source col">
                                <a href="" target="_blank">
                                    <FontAwesomeIcon icon="at" size="md"/>
                                    <br />
                                    <span>Email</span>
                                </a>
                            </div>
                            <div className="contact-source col">
                                <a href="" target="_blank">
                                    <FontAwesomeIcon icon="file-pdf" size="md"/>
                                    <br />
                                    <span>Resume</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Header;