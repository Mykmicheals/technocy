import React, { Fragment, useContext } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { Route } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import HomeScreen from './Pages/HomeScreen'
import PopularProducts from './Pages/PopularProducts'
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import SignUp from './Pages/SignUp'
import CartPage from './Pages/CartPage'
import DetailPage from './Pages/DetailPage'
import CategoryPage from './Pages/CategoryPage'
import ProductProvider from './Store/ProductProvider'
import SearchResult from './Pages/SearchResult'
import Profile from './Pages/Profile'
import CartContext from './Store/cartContext'
import { CartProvider } from 'react-use-cart'
import CartModal from './Pages/CartModal'
import Contact from './Pages/Contact'
import About from './Pages/About'
import AuthContext from './Store/AuthContext'
import Loading from './components/Loading';
import CartOverlay from './components/CartOverlay'
import Auth from './Pages/Auth'
import EmailVerify from './Pages/EmailVerify'



function App() {
  const cartCtx = useContext(CartContext)
  const authCtx = useContext(AuthContext)

  const closeCart = () => {
    cartCtx.cartClose()
  }
  return (
    <Fragment>
    <ProductProvider>
        <CartProvider>
       
          <Header />
          {!authCtx.loading ?  <div onClick={cartCtx.cartClose}>
          <Route path='/' exact>
            <HomeScreen />
          </Route>
          <Route path='/about' exact>
            <About />
          </Route>

          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>

            <Route path='/auth/:name'>
            <Auth />
            </Route>

            <Route path='/verifyEmail'>
              <EmailVerify/>
            </Route>

          <Route path='/all/:id'>
            <PopularProducts />
          </Route>
          <Route path='/category/:name'>
            <CategoryPage />
          </Route>
          <Route path='/details/:slug'>
            <DetailPage />
          </Route>
          <Route path='/cart'>
            <CartPage />
          </Route>
          <Route path='/search/:params'>
            <SearchResult />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>

            <Footer />
          </div>: <Loading />}
          {cartCtx.cartOpen &&  <CartOverlay />}

        </CartProvider>
      </ProductProvider> 
    </Fragment>
  )
}

export default App
