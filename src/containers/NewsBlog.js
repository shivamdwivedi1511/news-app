import React, { Component } from "react";
// import axios from "axios";
// import NewsSection from "../components/NewsSection/NewsSection";
import "./NewsBlog.css";
import Navbar from '../components/Navbar/Navbar';
import TopNews from './NewsRoutes/TopNews/TopNews';
import AllNews from './NewsRoutes/AllNews/AllNews';
import NationalNews from './NewsRoutes/NationalNews/NatonalNews';
import InternationalNews from './NewsRoutes/InternationalNews/InternationalNews';
import {Route} from 'react-router-dom';

class NewsBlog extends Component {
  state = {
    API_KEY: "494c83d04f7a4c86ba00d6064e8a153b",
    posts: null
  };

  render() {
 
    
    return (
      <div>
        <h1 className="heading" >News Blog</h1>
        <Navbar/>
        
        {/* <TopNews/> */}
        {/* <NationalNews/> */}
        {/* <AllNews/> */}
        {/* <InternationalNews/> */}
        <Route path='/' exact component={TopNews} />
        <Route path='/international'  component={InternationalNews} />
        <Route path='/all'  component={AllNews} />
        <Route path='/national'  component={NationalNews} />

      </div>
    );
  }
}

export default NewsBlog;
