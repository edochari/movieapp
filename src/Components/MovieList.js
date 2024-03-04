import {Component} from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component{



    render(){
       return (
        <>
         <MovieCard />
         <MovieCard />
        </>

       )
        
    }
}

export default MovieList;