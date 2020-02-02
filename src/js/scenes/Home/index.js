import React, { Component } from 'react';
import Main from './Main';

class Home extends Component {
    constructor(props) {
        super(props);
        //this.state = {  }
    }
    render() { 
        return (
            <div className="home-page">
                {/* */}
                <Main />
            </div>
        );
    }
}
 
export default Home;