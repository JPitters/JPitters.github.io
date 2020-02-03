import React, { Component } from 'react';
import logo from '../../../logo.svg'

class Main extends Component {
    constructor(props) {
        super(props);
        //this.state = {  }
    }
    render() { 
        return (
            <div className="section-main">
                {/* */}
                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>

                <div className="main-container">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        You have entered a CONSTRUCTION ZONE, this site is <code>In Progress</code>. 
                        <br />Feel free to wait and watch... at your risk.
                    </p>
                    <a
                        className="App-link"
                        href="https://github.com/JPitters"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Not React
                    </a>
                </div>
            </div>
        );
    }
}
 
export default Main;