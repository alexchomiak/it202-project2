import React from 'react'
import {NavLink} from 'react-router-dom';
export default function NavBar() {
  return (
    <div className="nav">
        <NavLink exact className="navlink" activeClassName="navlink-active" to="/"> Home </NavLink>
        <NavLink exact className="navlink" activeClassName="navlink-active" to="/info"> Information </NavLink>
    </div>
  )
}
