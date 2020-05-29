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
        <div style={{padding: '10px'}}>
          <Switch>
            <Route path="/about" component={About}/>
            <Route path="/contactus" component={ContactUs}/>
            <Route path="/" component={Home}/>
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
