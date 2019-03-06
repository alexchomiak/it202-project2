import React, { Component } from 'react'
import Header from './Header'
import Home from './Home'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import NavBar from './NavBar';
export default class Graffiti extends Component {
  render() {
    return (
        <Router>
          <div>
          <Header/>
          <NavBar/>
          <Switch>
           
            <Route exact path="/info" component={null}/>
            <Route exact path="/" component={Home}/>

          </Switch>

          </div>
        
        </Router>
     
    )
  }
}
