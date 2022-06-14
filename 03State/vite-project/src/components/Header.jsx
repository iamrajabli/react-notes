import React from 'react';

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            showContent: false
        }
        this.value;
    }

    showMore = () => {
        if (!this.state.showContent) {
            this.setState({ showContent: true });
        } else {
            this.setState({ showContent: false });
        }
    }

    getValue = (e) => {
        this.value = e.target.value;;
    }

    submitToLS = () => {
        const id = new Date().getTime().toString().slice(7, 13);
        const data = {
            dataID: id,
            dataVALUE: this.value
        };
        this.setLS(data);
    }

    getLS = () => {
        let arr;
        if (localStorage.getItem('data') === null) {
            arr = []
        } else {
            arr = JSON.parse(localStorage.getItem('data'));
        }
        return arr;
    }

    setLS = (data) => {
        let arr = this.getLS();
        arr.push(data);
        localStorage.setItem('data', JSON.stringify(arr));
    }

    render() {
        return (
            <div>
                <input 
                type="text" 
                onInput={this.getValue}
                placeholder={this.props.placeholder} />
                
                <button onClick={this.submitToLS}>Click</button><br /><br />

                <button onClick={this.showMore}>Show more</button><br />
                <p>
                    {this.state.showContent ? (
                        <a href={this.props.href}>Github</a>
                    ) : null }
                </p>
                
            </div>
        );
    };
};