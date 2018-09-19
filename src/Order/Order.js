import React, { Component } from 'react';
import config from '../config';

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
                <div key={i}>
                    <p>{t.name}</p>
                    <p>Price: {t.price}</p>
                    <p>Stock: {t.stock}</p>
                </div>
            )
        })

        return (
            <div>
                <div>
                    {orders}
                    <hr />
                    <p><strong>Total price:</strong> {sum}</p>
                </div>
                <div>
                    <form onSubmit={this.submitHandler}>
                        <label htmlFor="name">Name</label>
                        <input name="name" type="text" value={this.state.name} onChange={(event) => this.onChangeHandler(event)} />
                        <label htmlFor="adress">Adress</label>
                        <input name="adress" type="text" value={this.state.adress} onChange={(event) => this.onChangeHandler(event)} />
                        <label htmlFor="email">Email</label>
                        <input name="email" type="text" value={this.state.email} onChange={(event) => this.onChangeHandler(event)} />
                        <input type="submit" value="Submit" />
                    </form>


                </div>
            </div>
        );
    }
}