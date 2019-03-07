import React, { Component } from 'react'
import Header from './Header'
import Home from './Home'
import List from './List'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import NavBar from './NavBar';
import Form from './Form'
import axios from 'axios';
import Information from './Information';
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
    queryResults: "Enter a Ward # and Status to search!"
}


  loadInitialValues = () => {
    let url = "https://data.cityofchicago.org/resource/cdmx-wzbz.json?$limit=200";
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
    let url = "https://data.cityofchicago.org/resource/cdmx-wzbz.json?$limit=200";
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
     
        <Router>      
          <div>
          <Header/>
          <NavBar/>
          
          <Route path="/" render={ 
            ({location: {pathname}}) => {
                if(pathname === "/info") return <Information/>
                return (
                  <Form queryResults={this.state.queryResults} statuses={this.state.statuses} status={this.status} setStatus={this.setStatus} onSubmit={this.onSubmit} />
                )
                }} />
          
          
          <Switch>
            <Route exact path="/info" component={null}/>
            <Route exact path="/list" component={() => (<List listings={this.state.listings}/>)}/>
            <Route exact path="/" component={() => (<Home listings={this.state.listings}/>)}>
              
            </Route>
            
          </Switch>

          </div>
        
        </Router>
     
    )
  }
}
