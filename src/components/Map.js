import React from 'react'
import { Map, GoogleApiWrapper,Marker,InfoWindow} from 'google-maps-react';

export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };
 
  
  onMarkerClick = (props, marker, e) =>{
  this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  

  render() {
    console.log("----")
    console.log(this.props.listings[0])
    console.log("----")

    let latitude = 41.8727647
    let longitude = -87.6566319
    var mapZoom = 10;
    if(this.props.listings[0] !== undefined) {
        let first = this.props.listings[0]
        if(first.latitude !== undefined) {
          latitude = first.latitude
          longitude = first.longitude
          mapZoom = 12
        }
        
        
    }

    console.log("oof")

    return (
        <Map
        google={this.props.google}
        zoom={mapZoom}
        className="map"
        initialCenter={{
         lat: latitude,     
         lng: longitude
        }}
      >
        
        {this.props.listings.map((listing,index) => {
        let name= 
          "Address:" + listing.street_address + "+" + 
          "Request #: " + listing.service_request_number + "+" + 
          "Status: " + listing.status + "+" +
          "Location: " + listing.where_is_the_graffiti_located_ + "+" +
          "Surface: " + listing.what_type_of_surface_is_the_graffiti_on_ + "+" +
          "Date Created: " + listing.creation_date

          if(listing.completion_date) name+= "+" + "Completion Date: " + listing.completion_date

          let url = (listing.status === "Completed" || listing.status === "Completed - Dup") ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png" : "http://maps.google.com/mapfiles/ms/icons/red-dot.png"

          return (
            <Marker
            icon={{
              url
            }}
          key={index}
          onClick={this.onMarkerClick}
          name={
            name

          }

          position={{lat: listing.latitude, lng: listing.longitude}}
        />

        
          )
        })}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            {this.state.selectedPlace.name && this.state.selectedPlace.name.split("+").map((row,index) => {
              return (<h4 key={index}> {row} </h4>)
            })}
          </div>
        </InfoWindow>
        
      </Map>
    )
  }
  
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCbhpG5PH6OsEVbG_Pk0-Y5jtqthmD9mVg'
})(MapContainer);