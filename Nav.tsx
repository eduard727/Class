
import React from "react";
import { NavLink } from "react-router-dom";

export const Nav:React.FC = () => {
     return <nav className = 'header'>
          <NavLink exact to='/'activeClassName={'active'}>Home</NavLink>
          <NavLink exact to='/about'activeClassName={'active'}>About</NavLink>
     </nav>
}