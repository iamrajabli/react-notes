import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from 'axios';

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            movies: [],
            searchQuery: ""
        }

    };

    async componentDidMount() {
        const res = await axios.get('http://localhost:3001/movies');
        this.setState({ movies: await res.data });
    };


    // deleteItem = (movie) => {
    //     const newMovieList = this.state.movies.filter(
    //         m => m.id !== movie.id
    //     );

    //     this.setState(() => (
    //         { movies: newMovieList }
    //     ));
    // }


    // FETCH DELETE
    // deleteItem =  async (movie) => {

    //     await fetch(`http://localhost:3001/movies/${movie.id}`, {
    //         method: "DELETE"
    //     });

    //     const newMovieList = this.state.movies.filter(
    //         m => m.id !== movie.id
    //     );

    //     this.setState(() => (
    //         { movies: newMovieList }
    //     ));
    // }

    // AXIOS DELETE
    deleteItem =  async (movie) => {

        await axios.delete(`http://localhost:3001/movies/${movie.id}`);

        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );

        this.setState(() => (
            { movies: newMovieList }
        ));
    }

    searchMovie = (value) => {
        this.setState({ searchQuery: value });
    }

    render() {
        const newMovie = this.state.movies.filter(
            movie => movie.name
                .toLowerCase()
                .indexOf(this.state.searchQuery.toLowerCase()) !== -1
        )


        return (
            <div className="container">
                <div className="row">
                    <SearchBar searchMovieProp={this.searchMovie} />
                    <MovieList
                        movies={newMovie}
                        deleteItem={this.deleteItem}
                    />
                </div>
            </div>
        );
    }
}