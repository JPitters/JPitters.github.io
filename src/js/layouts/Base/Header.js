import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Background from '../../../images/header-bg1.jpg';
import styled from 'styled-components';

var Section = styled.section`
    background-image: linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.8)), url(${Background});
    background-size: cover;
    position: relative;
    height: 100%;
`;
console.log(Section);

class Header extends Component {
    constructor(props) {
        super(props);
        this.bgStyle = {};
    }

    componentDidMount(){
        console.log(this.bgStyle);
    }

    render() { 
        //const {style1} = this.bgStyle.style;
        return (
            <Section className="site-head">
                <div className="nav-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <div className="masthead mb-auto">
                        <div className="inner">
                            <h3 className="masthead-brand"><a href="https://github.com/JPitters"  target="_blank" rel="noopener noreferrer">J. Pitters</a></h3>
                            <Nav className="nav nav-masthead justify-content-center">
                                <NavItem>
                                    <Nav.Link className="nav-link active" href="/">Home</Nav.Link>
                                </NavItem>
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
                                <a href="https://www.linkedin.com/in/jpitters" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" />
                                    <br />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                            <div className="contact-source col">
                                <a href="https://www.github.com/JPitters" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={['fab', 'github']} size="lg"/>
                                    <br />
                                    <span>Github</span>
                                </a>
                            </div>
                            <div className="contact-source col">
                                <a href="" target="_blank">
                                    <FontAwesomeIcon icon="at" size="lg"/>
                                    <br />
                                    <span>Email</span>
                                </a>
                            </div>
                            <div className="contact-source col">
                                <a href="https://github.com/JPitters/JPitters.github.io/blob/gh-pages/src/images/files/JordanPitters_Resume.pdf" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon="file-pdf" size="lg"/>
                                    <br />
                                    <span>Resume</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        );
    }
}
 
export default Header;