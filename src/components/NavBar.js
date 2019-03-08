import React from 'react'
import {NavLink} from 'react-router-dom';
export default function NavBar() {
  return (
    <div className="nav">
        <NavLink exact className="nav-link" activeClassName="nav-link--active" to="/"> Search</NavLink>
        <NavLink exact className="nav-link" activeClassName="nav-link--active" to="/map"> Map </NavLink>
        <NavLink exact className="nav-link" activeClassName="nav-link--active" to="/list"> List </NavLink>
        <NavLink exact className="nav-link" activeClassName="nav-link--active" to="/info"> App Info </NavLink>
    </div>
  )
}
