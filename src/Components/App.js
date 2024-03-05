
import Navbar from "./Navbar";
import MovieList from "./MovieList";
import React from "react";
import {movies} from "../Data/MovieData";

class App extends React.Component {

  constructor()
  {
      super();
      this.state={
         
      }
  }
  
  handleAddStar=(movie)=>{
     const {movies}=this.state;
     const mid=movies.indexOf(movie);
     if(movies[mid].star>=5)
     {
      return ;
     }
     movies[mid].star += 0.5;

     this.setState({
      movies:movies
     })

  }

  handleDecreaseStar=(movie)=>{
    const {movies}=this.state;
    const mid=movies.indexOf(movie);
    if(movies[mid].star<=0)
    {
     return ;
    }
    movies[mid].star -= 0.5;

    this.setState({
     movies:movies
    })

 }

 handleTogglingButtons=(Button,movie)=>{
  const {movies}=this.state;
    const mid=movies.indexOf(movie);
  if(Button==="favourite")
  {
      movies[mid].fav=!movies[mid].fav;
  }
  else
  {
    movies[mid].isInCart=!movies[mid].isInCart;
  }

  this.setState({
    movies:movies
   })
 

}
render(){
  return (
    <>
      <Navbar /> 
      <MovieList />
    </>
   
  );

}
  
}

export default App;
