import React from 'react';

const buy = (props) => {
    return (
        <div>
            <button onClick={props.clicked}>Order now</button>
        </div>
    );
};

export default buy;