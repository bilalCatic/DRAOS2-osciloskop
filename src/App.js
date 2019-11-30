import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFound from './scenes/NotFound';
import { MENU_ITEMS } from './config/constants';

class App extends Component {
    render() {
        document.title='Experimental Oscilloscope App';
        return (
            <Router>
                <Switch>
                    {
                        MENU_ITEMS.map(mainMenuItem =>
                            <Route key={mainMenuItem.key}
                                   exact
                                   path={mainMenuItem.url}
                                   component={mainMenuItem.component}
                            />)
                    }
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}
export default App;
