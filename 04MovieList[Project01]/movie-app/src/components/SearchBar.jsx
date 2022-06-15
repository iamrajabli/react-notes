import React from "react";

export default class SearchBar extends React.Component {
    constructor() {
        super();
    }

    handleFormSubmit = e => {
        e.preventDefault();
    }

    render() {
        return (
            <form className="mt-5" onSubmit={this.handleFormSubmit} >
                <div className="form-row mb-5">
                    <div className="col-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search a movie"
                            onChange={e => this.props.searchMovieProp(e.target.value)}
                        />
                    </div>
                </div>
            </form>
        );
    };
};