import React, { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useCart } from "react-use-cart";
import AuthContext from "../Store/AuthContext";
import ProductContext from "../Store/ProductContext";
import CartContext from "../Store/cartContext";


function Navigation() {
  const authCtx = useContext(AuthContext)
  const productCtx = useContext(ProductContext)
  const cartCrx = useContext(CartContext)
  const { totalUniqueItems } = useCart();
  const [search, setSearch] = useState('')
  const [showLoginNav, setShowLoginNav] = useState(false)
  const navigate = useHistory()


  const cartHandler = (event) => {
    cartCrx.cartFunc()
  };


  const logoutHandler = () => {
    authCtx.logout()
    navigate('/login')

  }

  const searchHandler = (event) => {
    event.preventDefault()
    setSearch(event.target.value)
  }

  const loginNavHandler = () => {
    setShowLoginNav(showLoginNav => !showLoginNav)
  }
  const overLayHandler = () => {
    setShowLoginNav(false)
  }

  const searchSubmit = (event) => {
    event.preventDefault()
    authCtx.loadingHandler()
    navigate.push(`/search/${search}`)
  }

  const showLoading = () => {
    authCtx.loadingHandler()
  }

  return (
    <nav className="navigation">

      <span className="nav-span">
        <NavLink activeClassName="active" to="/about">
          <span>About</span>
        </NavLink>
      </span>

      <span className="nav-span">
        <span onClick={cartHandler}>Cart <span id="cart-number">{totalUniqueItems}</span> </span>
      </span>

      <span className="nav-span">
        <NavLink activeClassName="active" to="/contact">
          <span onClick={showLoading}>Contact</span>
        </NavLink>
      </span>

      {!authCtx.isLoggedIn && <span className="nav-span">
        <NavLink to="auth/login">
          <span onClick={showLoading}>Login</span>
        </NavLink>
      </span>}

      {authCtx.isLoggedIn && <span className="nav-span">
        <>
          <span onClick={logoutHandler}>Logout</span>
        </>
      </span>}

      <span className="nav-span">
        <form onSubmit={searchSubmit}>
          <input onChange={searchHandler} placeholder="search-product" />
          <i onClick={searchSubmit} className="search-icon"> <Icon icon="carbon:search" /></i>
        </form>
      </span>

      {authCtx.isLoggedIn && <span className="nav-span">
        <NavLink to="/profile">
          <span>{authCtx.userName}</span>
        </NavLink>
      </span>}

    </nav>
  );
}

export default Navigation;
