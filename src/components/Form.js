import React from 'react'

export default function Form(props) {
  return (
      <div className="container">
      <form onSubmit={props.onSubmit} className="form ">
                    <h2 className="form-title">Enter a search Query</h2>
                    <h4 className="form-label"> Ward #</h4>
                    <input name="ward" min="0" max="50" className="textbox" type="number"/>
                    <h4 className="form-label"> Status </h4>
                    <select name="status" className="custom-select custom-select-lg mb-3">
                        {
                            props.statuses.map((status) => {
                                return (
                                    <option key={status}>{status}</option>
                                )
                            })
                        }
                        
                    </select>
                    <button className="button">Submit Search</button>
                    
                    
        </form>
        <div className="alert alert-success" role="alert" style={{display: (props.queryResults === "") ? "none" : ""}}>
            {props.queryResults}
        </div>
    </div>
  )
}
