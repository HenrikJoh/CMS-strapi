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
        <div className="nav">
          <ul className="navbar">
            <li><NavLink to="/">Home</NavLink></li>
            <li> <NavLink to="/Order">Order</NavLink></li>
            <Cart />
          </ul>

        </div>

        <Route path="/Order" exact component={Order} />
        <Route path="/" exact component={ProductList} />
        <Route path="/products/:id" component={SingleItem} />
      </div>
    );
  }
}

export default App;
