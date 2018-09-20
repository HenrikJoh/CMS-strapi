import React, { Component } from 'react';

import config from '../config';

export default class Filter extends Component {
    render() {
        return (
            <div className="filtering">
                <div className="theEnd">
                    <select onChange={this.props.toggle}>
                        <option value={config.nameSort}>Name</option>
                        <option value={config.priceSort}>Price</option>
                        <option value={config.categorySort}>Category</option>
                        <option value={config.stockSort}>Stock</option>
                        <option value='?category=Flowers'>Flowers</option>
                        <option value='?category=Plants'>Plants</option>
                    </select>
                </div>
            </div>
        );
    }
}