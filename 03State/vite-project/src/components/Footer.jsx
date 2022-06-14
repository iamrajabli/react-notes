import React from "react";
export default class Footer extends React.Component {
    constructor() {
        super();
        this.i = 0;
        this.state = {
            count: 0
        }
    }

    setCount = () => {
        this.setState({count: ++this.i})
    }

    render() {
        return (
            <div>
                <h4>{this.state.count}</h4>
                <button onClick={this.setCount}>Count+</button>
            </div>
        );
    };
};