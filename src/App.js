import React from 'react';
import {Router, Route, Link, Switch, BrowserRouter} from 'react-router-dom'

import {About} from './components/About';
import {ContactUs} from './components/ContactUs';
import {Home} from './components/Home';

import {Navigation} from './components/Navigation'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Navigation></Navigation>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
      
    );
  }
}

export default App;
