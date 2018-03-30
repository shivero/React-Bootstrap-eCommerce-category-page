import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>React here!</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-4">
                            <h4>Subcategories</h4>
                            <SubCategories subcategories={subcategoryList} />
                        </div>
                        <div className="col-sm-8">
                            <h4>Products:</h4>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

class SubCategories extends Component {

    render() {
        const elem = subcategoryList.map((sub, index) =>
            <li key={index}>{sub.name} ({sub.count})</li>
        )
        return (
            <div>

                <ul className="list-unstyled">{elem}</ul>
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
    { name: "Szafy rozdzielcze - wyposażenie", count: 131 }
]

ReactDOM.render(<App />, document.getElementById("app"));