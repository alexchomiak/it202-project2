import React from 'react'
import {NavLink} from 'react-router-dom';
export default function NavBar() {
  return (
    <div className="nav">
        <NavLink exact className="nav-link" activeClassName="nav-link--active" to="/"> Request Map </NavLink>
        <NavLink exact className="nav-link" activeClassName="nav-link--active" to="/list"> Request List </NavLink>
        <NavLink exact className="nav-link" activeClassName="nav-link--active" to="/info"> App Info </NavLink>

    </div>
  )
}
