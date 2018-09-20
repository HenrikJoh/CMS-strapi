import React, { Component } from 'react';

import config from '../config';
import Review from './Review/Review';
import Comment from './Comment/Comment';
import Buy from './Buy/Buy';
import './SingleItem.css'

const url = config.Url

let storage = [];
export default class SingleItem extends Component {
    state = {
        item: null,
        reviews: []
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        storage = JSON.parse(localStorage.getItem("session")) || []
        fetch(url + id)
            .then(res => res.json())
            .then((data) => {
                this.setState({ item: data });
            });
        this.fetchComment();

    }

    submitHandler = (newComment) => {
        const url = config.review;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: newComment.name,
                review: newComment.comment,
                rating: newComment.rating,
                productId: newComment.productId
            }
            ),
        })
            .then(() => {
                this.fetchComment();
            })
    }

    fetchComment = () => {
        const commentUrl = config.review;
        fetch(commentUrl)
            .then(res => res.json())
            .then(data => {
                this.setState({ reviews: data })
            });
    }

    cart = () => {
        let cart = this.state.item;
        storage.push(cart);
        localStorage.setItem('session', JSON.stringify(storage));
    }


    render() {
        const items = this.state.item;
        if (items === null) {
            return null;
        }
        return (
            <div className="product-container">
                <div>
                    <div className="product-image">
                        <img src={config.imageUrl + items.image.url} alt={items.name} />
                    </div>
                    <h3>{items.name}</h3>
                    <p>{items.description}</p>
                    <h4>Price: {items.price}$</h4>
                    <h4>In stock: {items.stock}</h4>
                </div>
                <div className="buy-button">
                    <Buy clicked={this.cart} />
                </div>
                <Comment
                    item={items}
                    clicked={this.submitHandler}
                />
                <Review item={items} reviews={this.state.reviews} />
            </div>
        );
    }
}