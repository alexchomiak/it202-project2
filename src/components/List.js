import React, { Component } from 'react'
import ListItem from './ListItem'
export default class List extends Component {  
  render() {
    return (
      <div className="container list">
      <div className="cardlist">
      {this.props.listings.map((listing,index)=> {
            return (
               <ListItem listing={listing} key={index}/>
            )})}      
      </div>
    
      </div>
    )
  }
}
