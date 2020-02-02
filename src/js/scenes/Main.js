import React, { Component } from 'react';
import Base from '../layouts/Base';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';

class Main extends Component {
    render() { 
        return (
            <Base>
                <Switch>
                    <Route component={Home} exact path="/" />
                </Switch>
            </Base>
        );
    }
}
 
export default Main;
