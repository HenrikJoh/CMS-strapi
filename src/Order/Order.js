import React, { Component } from 'react';
import config from '../config';

import './Order.css'

const url = config.orders;
export default class Order extends Component {
    state = {
        order: [],
        name: '',
        email: '',
        adress: '',
    }

    componentDidMount() {
        let storage = JSON.parse(localStorage.getItem("session")) || [];
        this.setState({ order: storage });
    }

    onChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    submitHandler = (event) => {
        event.preventDefault();
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                customer: this.state.name,
                cart: this.state.order,
                totalPrice: this.getTotalPrice(),
                adress: this.state.adress
            }),
        })
        localStorage.clear();
        this.setState({ order: [] });
    }
    getTotalPrice() {
        return this.state.order.reduce((a, b) => a + b.price, 0);
    }


    render() {
        let sum = 0;
        const orders = this.state.order.map((t, i) => {
            sum = sum + t.price
            return (
                <div className="order" key={i}>
                    <p><span>Product: </span>{t.name}</p>
                    <p><span>Price: </span> {t.price}$</p>
                    <p><span>Stock: </span> {t.stock}</p>
                </div>
            )
        })

        return (
            <div className="order-container">
                <div>
                    <div className="orders">
                        {orders}
                    </div>
                    <div className="total">
                        <p><strong>Total price:</strong> {sum}$</p>
                    </div>
                </div>
                <div>
                    <form onSubmit={this.submitHandler}>
                        <label htmlFor="name">Name</label>
                        <input className="order-input" name="name" type="text" value={this.state.name} onChange={(event) => this.onChangeHandler(event)} />
                        <label htmlFor="adress">Adress</label>
                        <input className="order-input" name="adress" type="text" value={this.state.adress} onChange={(event) => this.onChangeHandler(event)} />
                        <label htmlFor="email">Email</label>
                        <input className="order-input" name="email" type="text" value={this.state.email} onChange={(event) => this.onChangeHandler(event)} />
                        <input id="order-btn" type="submit" value="Submit" />
                    </form>


                </div>
            </div >
        );
    }
}