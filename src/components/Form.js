import React from 'react'

export default function Form(props) {
  return (
      <form onSubmit={props.onSubmit} className="container form ">
                    <h2 className="form-title">{props.queryResults}</h2>
                    <h4 className="form-label"> Ward #</h4>
                    <input name="ward" className="textbox" type="number"/>
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
  )
}
