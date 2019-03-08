import React, { Component } from 'react'
import Header from './Header'
import List from './List'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import NavBar from './NavBar';
import Form from './Form'
import Map from './Map'
import axios from 'axios';
import Information from './Information';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({
  basename: process.env.PUBLIC_URL
})
export default class Graffiti extends Component {
  state = {
    listings: [],
    statuses: [
      "All",
      "Open",
      "Completed"
    ],
    status: "All",
    ward: -1,
    queryResults: ""
}


  loadInitialValues = () => {
    let url = "https://data.cityofchicago.org/resource/cdmx-wzbz.json?$SELECT=DISTINCT%20status";
    axios.get(url)
    .then(res => {
        res.data.forEach((listing) => {
          if(!this.state.statuses.includes(listing.status)) {
            this.setState({statuses: [...this.state.statuses, listing.status]})
          }
        })
        this.setState({listings: res.data})
    })
  }


  componentDidMount() {
    this.loadInitialValues()
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    //set ward
    let ward = -1;
    if(e.target.ward.value !== '') ward = e.target.ward.value

    //initialize url
    let url = "https://data.cityofchicago.org/resource/cdmx-wzbz.json?$limit=250";
    let urlParams = {}
    //set params
    if(e.target.status.value !== "All") urlParams = {...urlParams, status: e.target.status.value}
    if(ward !== -1) urlParams = {...urlParams, ward}

    //grab data
    axios.get(url, {
      params: urlParams
    })
    .then(res => {
        console.log(res.data)
        this.setState({
          queryResults: "Your query returned " + res.data.length + " results.",
          listings: res.data
        })
    })

  }

  setStatus = (status) => {
    this.setState({status})
  }

  render() {
    return (
     
        <Router history={history} basename={process.env.PUBLIC_URL}>      
          <div className="app-container">
          <Header/>
          <NavBar/>

          <Switch>
            <Route exact path="/info" component={Information}/>
            <Route exact path="/map" component={() => (<Map listings={this.state.listings}/>)}/>
            <Route exact path="/list" component={() => (<List listings={this.state.listings}/>)}/>
            <Route exact path="/" component={() => (<Form queryResults={this.state.queryResults} statuses={this.state.statuses} status={this.status} setStatus={this.setStatus} onSubmit={this.onSubmit} />)}>
              
            </Route>
            
          </Switch>

          </div>
        
        </Router>
     
    )
  }
}
