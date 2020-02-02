import React, { Component } from 'react';
import Base from '../layouts/Base';
import { Switch, Route } from 'react-router-dom';

class Main extends Component {
    state = {  }
    render() { 
        return (
            <Base>
                <Switch>
                    <Route component="Home" exact path="/" />
                </Switch>
            </Base>
        );
    }
}
 
export default Main;
