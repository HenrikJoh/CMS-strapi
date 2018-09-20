import React, { Component } from 'react';

import './Comment.css';

export default class Comment extends Component {
    state = {
        name: '',
        comment: '',
        rating: '1',
        productId: ''
    }
    componentDidMount() {
        const product = this.props.item.id;
        this.setState({ productId: product });
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    sub() {
        this.props.clicked(this.state)
        this.setState({
            name: '',
            comment: '',
            productId: ''
        })
    }


    render() {
        return (
            <div className="comment-container">
                <h3>Review</h3>
                <label htmlFor="name">Name</label>
                <input name="name" id="name-input" value={this.state.name} onChange={(event) => this.changeHandler(event)} placeholder="Name" />
                <label htmlFor="comment">Comment</label>
                <textarea id="area-input" name="comment" value={this.state.comment} onChange={(event) => this.changeHandler(event)} placeholder="Your comment" />
                <label htmlFor="rating">Rating</label>
                <select id="option-input" name="rating" onChange={(event) => this.changeHandler(event)} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button id="comment-btn" onClick={this.sub.bind(this)}>Submit</button>
            </div>

        );
    }
}