
import Navbar from "./Navbar";
import MovieList from "./MovieList";
import React from "react";
import {movies} from "../Data/MovieData.js";

class App extends React.Component {

  constructor()
  {
      super();
      this.state={
         movies:movies,
         cartCount:0,
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

handleCartCount=(movie)=>{
  let {movies,cartCount}=this.state;
  let mid=movies.indexOf(movie);
  
  if(movies[mid].isInCart===true)
  {
    movies[mid].isInCart=false;
    cartCount -= 1;
  }
  else
  {
    movies[mid].isInCart=true;
    cartCount+=1;
  }
  
  this.setState({
    movies:movies,
    cartCount:cartCount
   })


}
handleFavourite=(movie)=>{
  let {movies,cartCount}=this.state;
  let mid=movies.indexOf(movie);
  
  if(movies[mid].fav===true)
  {
    movies[mid].fav=false;
    
  }
  else
  {
    movies[mid].fav=true;
    
  }
  
  this.setState({
    movies:movies,
    
   })
  }
render(){
  return (
    <>
      <Navbar  cartCount={this.state.cartCount}/> 
      <MovieList 
      movies={this.state.movies}
      addStars={this.handleAddStar}
      decreaseStars={this.handleDecreaseStar}
      cartCounter={this.handleCartCount}
      toggleFavourite={this.handleFavourite}
       />
    </>
   
  );

}
  
}

export default App;
