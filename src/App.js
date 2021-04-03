import React, { useEffect } from "react";
import {useDispatch} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import Nav from "./components/Nav/Nav";
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Home from "./components/Home/Home";
import Cart from './components/Cart/Cart'
import ProductDetail from './components/ProductDetail/ProductDetail'
import Checkout from './components/Checkout/Checkout'
import Footer from "./components/Footer/Footer";
import {fetchProducts} from './actions/productsActions'
import {fetchCart} from './actions/cartActions'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <ScrollToTop />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/cart' component={Cart} />      
        <Route exact path='/product/:id' component={ProductDetail} />  
        <Route exact path='/checkout' component={Checkout} />      
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
