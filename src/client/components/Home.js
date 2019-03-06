import React, { Component } from 'react'

import axios from "axios";
import Map from './Map'
export default class Home extends Component {
    state = {
        listings: []
    }

    loadValues = () => {
        axios.get("https://data.cityofchicago.org/resource/cdmx-wzbz.json?$limit=500")
        .then(res => {
            this.setState({listings: res.data})
        })
    }

    componentDidMount() {
        this.loadValues()
    }
  render() {
    return (
      <div>
          <Map/>
        {this.state.listings.map((listing,index)=> {
            console.log(listing);
            return (
                <div key={index} className="card" style={{"width": "30rem"}}>
                    <div className="card-body">
                        <h5 className="card-title"> {listing.status} </h5>
                        <h6 className="card-subtitle mb-2 text-muted">{listing.ward}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">{listing.creation_date}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">{listing.street_address}</h6>

                        <p className="card-text">X: {listing.x_coordinate}</p>
                        <p className="card-text">Y: {listing.y_coordinate}</p>
                        <p className="card-text">Latitude: {listing.latitude}</p>
                        <p className="card-text">Longitude: {listing.longitude}</p>

                        
                    </div>
                </div>
            )
        })}
      </div>
    )
  }
}
