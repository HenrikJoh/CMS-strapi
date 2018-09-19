import React from 'react';
import { Link } from 'react-router-dom';

import config from '../../config';
import './Product.css';


const Product = (props) => {
    return (
        <div className="product">
            <Link to={'products/' + props.prod.id}>{props.prod.name}</Link>
            <p>Price: {props.prod.price}</p>
            <p>Stock: {props.prod.stock}</p>
            <img src={config.imageUrl + props.prod.image.url} alt={props.prod.name} />
        </div>
    );
};

export default Product;