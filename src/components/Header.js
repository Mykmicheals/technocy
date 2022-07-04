import React, { useState, useContext } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";
import AuthContext from "../Store/AuthContext";


function Header() {


  const [showNav, setShow] = useState(false);
  const authCtx = useContext(AuthContext)

  const menuHandler = () => {
    setShow((showNav) => !showNav);
  };

  const closeNav = () => {
    setShow(false)
  }


  return (
    <div className="header">
      <Link to="/">
        <span className="logo">
          <i>
            {/* <Icon icon="fluent:food-16-filled" inline={true} /> */}
            <Icon icon="ion:logo-capacitor" />
          </i>
          <h1>Technocy</h1>
        </span>

      </Link>
      <Navigation />

      {showNav && (
        <nav onClick={showNav} className="res-navigation">
          <div className="res-span">
            <Link to="/">
              <p>Home</p>
            </Link>
          </div>
          <span className="res-span">
            <NavLink activeClassName="active" to="/cart">
              {/* <p>My Cart {totalUniqueItems}</p> */}
            </NavLink>
          </span>
          <span className="res-span">
            <Link to="/contact">
              <p>Contact</p>
            </Link>
          </span>
          {!authCtx.isLoggedIn &&
            <span className="res-span">
              <NavLink activeClassName="active" to="/login">
                <p>Login</p>
              </NavLink>
            </span>
          }
          {authCtx.isLoggedIn &&
            <span className="res-span">
              <NavLink activeClassName="active" to="/profile">
                <p>Profile</p>
              </NavLink>
            </span>
          }
          {authCtx.isLoggedIn &&
            <span className="res-span">
              <NavLink activeClassName="active" to="/profile">
                <p>Logout</p>
              </NavLink>
            </span>
          }
        </nav>
      )}

      <span onClick={menuHandler} className="icon">
        <span className="res-span">
            <Icon icon="bx:menu-alt-right" />
        
        </span>

      </span>
    </div>
  );
}

export default Header;
