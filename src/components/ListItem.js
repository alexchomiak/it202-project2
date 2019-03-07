import React from 'react'

export default function ListItem(props) {
  return (

    <div className="card" style={{"width": "18rem"}}>
  <div className="card-body">
    <h3 className="card-title">{props.listing.street_address}</h3>
    <h5 className="card-subtitle mb-2 text-muted">Request #: {props.listing.service_request_number}</h5>
    <h5 className="card-subtitle mb-2 text-muted">Status: {props.listing.status}</h5>
    <h5 className="card-subtitle mb-2 text-muted">Created: {props.listing.creation_date}</h5>
    {props.listing.completion_date && <h5 className="card-subtitle mb-2 text-muted">Completed: {props.listing.completion_date}</h5>}

    <h5 className="card-subtitle mb-2 text-muted">Graffiti Location: {props.listing.where_is_the_graffiti_located_}</h5>
    <h5 className="card-subtitle mb-2 text-muted">Graffiti Surface: {props.listing.what_type_of_surface_is_the_graffiti_on_}</h5>
    
  </div>
</div>
       

  )
}
