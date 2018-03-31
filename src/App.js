import React, { Component } from "react";
import ReactDOM from "react-dom";
import ProductSort from './test.jsx';
import Products from './product';
class App extends Component {
    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>React here!</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <SubCategories subcategories={subcategoryList} />
                    </div>
                    <div className="col-sm-8">
                        <div className="row">
                            <div className="col-12">
                                <h4>Filters</h4>
                                <ProductSort />
                            </div>
                        </div>

                        <h4>Products:</h4>
                        <div className="row2">
                            <Products />
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

class SubCategories extends Component {
    render() {
        const category = subcategoryList.map((sub, index) =>
            <li key={index}>{sub.name} {sub.count}</li>
        )
        return (
            <div className="card">

                <div className="card-body">
                    <div className="card-title">
                        <h5>Subcategories</h5>
                    </div>
                    <ul className="list-unstyled">{category}</ul>
                </div>
            </div>

        );
    }
};

export default App;

const subcategoryList = [
    { name: "Obudowy izolacyjne", count: 1280 },
    { name: "Obudowy metalowe", count: 604 },
    { name: "Elementy rozdzielnic i stacji", count: 148 },
    { name: "Stacje transformatorowe", count: 1 },
    { name: "Złącza kablowe i pomiarowe", count: 9 },
    { name: "Akcesoria do rozdzielnic", count: 3045 },
    { name: "Szafy rozdzielcze - wyposażenie", count: 111 }
]

ReactDOM.render(<App />, document.getElementById("app"));