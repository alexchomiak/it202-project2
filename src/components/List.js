import React, { Component } from 'react'
import ListItem from './ListItem'
export default class List extends Component {  
  render() {
    return (
      <div className="cardlist">
      {this.props.listings.map((listing,index)=> {
            if(listing.latitude === undefined) {
              if(index === 0) {
                return <h2 className="prompt"> Enter a search query to populate this list!</h2>
              }
              return;
            }
            
            return (
               <ListItem listing={listing} key={index}/>
            )})}      
      </div>
    )
  }
}
