import React, { Component } from 'react';
import productService from './products-service';

class Products extends Component {

    render() {

        const InStock = <div className="card-text text-success">In stock</div>;
        const notAvailable = <div className="card-text text-danger">Not available</div>;
        const product = productService.map(
            (product, index) =>
                <div key={index} className="card mb-3">
                    <div className="card-body">
                        <div className="card-title">
                            <h6>{product.name}</h6>

                            {product.instock ? InStock : notAvailable}
                            <div className="card-text">{product.price}</div>
                            <a className="btn btn-primary float-right" href="#" role="button">Add to cart</a>
                        </div>
                    </div>
                </div>

        )
        return (
            product
        )
    }
}
export default Products;