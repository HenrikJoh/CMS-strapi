import React from 'react';
import './Buy.css'
const buy = (props) => {
    return (
        <div>
            <button className="buy-btn" onClick={props.clicked}>Order now</button>
        </div>
    );
};

export default buy;