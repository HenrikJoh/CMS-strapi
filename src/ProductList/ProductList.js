import React, { Component } from 'react';

import config from '../config';
import Product from './Product/Product';
import Filter from '../Filter/Filter';

// strapi hello 1234
const url = config.Url;

export default class ProductList extends Component {
    state = {
        products: [],
        values: config.nameSort,
        filter: ''
    };

    componentDidMount() {
        this.getProducts();
    }

    getProducts = () => {
        fetch(url + this.state.values.trim())
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                this.setState({ products: data });
            });
    }

    fetchProducts = (event) => {
        let val = event.target.value;
        this.setState({ values: val }, () => {
            this.getProducts();
        })

    }


    render() {
        const product = this.state.products.map(prod => {
            return <Product
                key={prod.id}
                prod={prod} />
        });

        return (
            <div className="main">
                <Filter toggle={(event) => this.fetchProducts(event)} />
                {product}
            </div>
        )
    }
}