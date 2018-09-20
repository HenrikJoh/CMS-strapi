import React, { Component } from 'react';

import './Review.css';

export default class Review extends Component {

    componentDidUpdate(prevProps) {
        if (this.props.item.id !== prevProps.item.id) {
            this.fetchComment();
        }
    }

    render() {
        const showReview = this.props.reviews.map((rev => {
            if (rev.productId === this.props.item.id) {
                return (
                    <div className="reviews" key={rev.id}>
                        <p><strong>Name</strong>{rev.name}</p>
                        <p><strong>Review</strong> {rev.review}</p>
                        <p><strong>Rating</strong> {rev.rating}</p>
                    </div>
                )
            }
            else {
                return null;
            }
        }));

        return (
            <div>
                {showReview}
            </div>
        );
    }
}