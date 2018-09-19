import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';

import ProductList from './ProductList/ProductList';
import Order from './Order/Order';
import SingleItem from './SingleItem/SingleItem';
import Cart from './Order/Cart';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li> <NavLink to="/Order">Order</NavLink></li>
          </ul>
          <Cart />
        </div>
        <Route path="/Order" exact component={Order} />
        <Route path="/" exact component={ProductList} />
        <Route path="/products/:id" component={SingleItem} />
      </div>
    );
  }
}

export default App;
