import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom';

const Navbar = props => {
  return (
    <div id="content">
      <section className="links">
        <nav className="link-effect-12" id="link-effect-12">
          <Link to='/' data-hover="Top">
            Top
          </Link>
          <Link to='/all' data-hover="All">
            All
          </Link>
          {/* <a href="/trending" data-hover="Trending">
          Trending
          </a> */}
          <Link to='/national' data-hover="National">
            National
          </Link>
          <Link to='/international' data-hover="International">
            International
          </Link>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
