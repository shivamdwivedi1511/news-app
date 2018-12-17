import React from "react";
import "./Navbar.css";
import {NavLink} from 'react-router-dom';

const Navbar = props => {
  return (
    <div id="content" >
      <section className="links">
        <nav className="link-effect-12" id="link-effect-12">
          <NavLink to='/'  exact data-hover="Top" activeStyle={{color:'yellow'}}>
            Top
          </NavLink>
          <NavLink to='/all'  exact data-hover="All" activeStyle={{color:'lightgreen'}}>
            All
          </NavLink>
          {/* <a href="/trending" data-hover="Trending">
          Trending
          </a> */}
          <NavLink to='/national' exact data-hover="National" activeStyle={{color:'cyan'}}>
            National
          </NavLink>
          <NavLink to='/international' exact data-hover="International" activeStyle={{color:'orange'}}>
            International
          </NavLink>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
