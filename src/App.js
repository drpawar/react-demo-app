import React from 'react';
import {Router, Route, Link, Switch, BrowserRouter} from 'react-router-dom'

import {About} from './components/About';
import {ContactUs} from './components/ContactUs';
import {Home} from './components/Home';
import {Login} from './components/login';

import {Navigation} from './components/Navigation'

import fire from './components/firebase/firebase'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user, "skdfjlsd");
      if(user) {
        this.setState({user})
      }
      else {
        this.setState({user: null});
      }
    })
  }

  render() {
    return (
      <div style={{padding: '10px'}}>
        {this.state.user ? 
        (
          <BrowserRouter>
          <Navigation></Navigation>
            <div style={{padding: '10px'}}>
              <Switch>
                <Route path="/about" component={About}/>
                <Route path="/contactus" component={ContactUs}/>
                <Route path="/" component={Home}/>
                <Route path="/Login" component={Login}/>
              </Switch>
            </div>
          </BrowserRouter>
        )
        : (
          <Login/>
          )}
      </div>
      
    );
  }
}

export default App;
