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
           
            <Route exact path="/it202-project2/info" component={null}/>
            <Route exact path="/it202-project2/" component={Home}/>

          </Switch>

          </div>
        
        </Router>
     
    )
  }
}
