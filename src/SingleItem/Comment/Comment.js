import React, { Component } from 'react';

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
            <div>
                <input name="name" value={this.state.name} onChange={(event) => this.changeHandler(event)} placeholder="Name" />
                <textarea name="comment" rows="10" cols="50" value={this.state.comment} onChange={(event) => this.changeHandler(event)} placeholder="Your comment" />
                <select name="rating" onChange={(event) => this.changeHandler(event)} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button onClick={this.sub.bind(this)}>Submit</button>
            </div>

        );
    }
}