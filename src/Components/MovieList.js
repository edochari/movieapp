import {Component} from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component{
   

    render(){
        const {movies}=this.state;
       return (
        <>
        {movies.map((movie)=> <MovieCard movies={movie} 
        addStars={this.handleAddStar} 
        decreaseStars={this.handleDecreaseStar} 
        toggleButtons={this.handleTogglingButtons}/>)}
         
        
        </>

       )
        
    }
}

export default MovieList;