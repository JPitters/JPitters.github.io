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
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </div>
            </div>
        );
    }
}
 
export default Main;