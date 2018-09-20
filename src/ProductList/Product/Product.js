import React from 'react';
import { Link } from 'react-router-dom';

import config from '../../config';
import './Product.css';


const Product = (props) => {
    return (
        <div className="product">
            <img src={config.imageUrl + props.prod.image.url} alt={props.prod.name} />
            <p>{props.prod.name}</p>
            <p>Price: {props.prod.price}</p>
            <p id="last">Stock: {props.prod.stock}</p>
            <Link to={'products/' + props.prod.id}>To product</Link>
        </div>
    );
};

export default Product;