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
        const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d58423e31d785a086c141d1eb826a596&language=en-US&page=1');
    
        this.setState({ movies: await res.data.results });
    };


    // AXIOS DELETE
    deleteItem =  async (movie) => {

        await axios.delete(`https://api.themoviedb.org/3/movie/popular?api_key=d58423e31d785a086c141d1eb826a596&language=en-US&page=1/${movie.id}`);

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
            movie => movie.original_title
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