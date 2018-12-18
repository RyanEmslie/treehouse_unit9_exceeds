import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = () => (
        <nav className="main-nav">
          <ul>
            <li><NavLink exact to='/'>Home</NavLink></li>
            <li><NavLink to='/results'>Results</NavLink></li>
            <li><NavLink to='/trees'>Trees</NavLink></li>
            <li><NavLink to='/houses'>Houses</NavLink></li>
            <li><NavLink to='/carson'>RyanCarson</NavLink></li>
            <li><NavLink to='/nsfw'>NSFW</NavLink></li>
          </ul>
      </nav>
      )
      
export default Nav;