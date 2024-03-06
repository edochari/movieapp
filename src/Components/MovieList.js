import {Component} from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component{
   

    render(){
        const {movies,addStars,decreaseStars,cartCounter,toggleFavourite}=this.props;
       return (
        <>
        {movies.map((movie)=> <MovieCard movies={movie} 
        addStars={addStars} 
        decreaseStars={decreaseStars} 
        cartCounter={cartCounter}
        toggleFavourite={toggleFavourite}
        key={movie.id}/>)}
         
        
        </>

       )
        
    }
}

export default MovieList;