import React, { Component } from 'react';

class ProductSort extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="inStock" />
                        <label className="custom-control-label" htmlFor="inStock">In Stock</label>
                    </div>
                </div>

            </div>
        );
    }
}

export default ProductSort;