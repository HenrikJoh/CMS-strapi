import React, { Component } from 'react';

let storage = JSON.parse(localStorage.getItem("session")) || [];
export default class Cart extends Component {
    render() {
        return (
            <div>
                <p>Cart: <span>({storage.length})</span></p>
            </div>
        );
    }
}
