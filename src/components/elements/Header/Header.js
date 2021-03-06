import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
              <div className="rmdb-header ">
                  <div className="rmdb-header-content">
                      <Link to="/">
                          <img alt="logo" className="rmdb-logo" src="./images/reactMovie_logo.png"/>
                       </Link>
                       <img alt="ddd" className="rmdb-tmdb-logo" src="./images/tmdb_logo.png" />
                  </div>
              </div>
          )
      }

export default Header; 