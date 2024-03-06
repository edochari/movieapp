import {Component} from "react";
import "../CSS/index.css";
class MovieCard extends Component{
   

    addStars(){
        if(this.state.stars>=5)
        {
            return ;
        }
        this.setState({
            stars:this.state.stars+0.5
        })
    }
    decreaseStars=()=>{
        if(this.state.stars<=0)
        {
            return ;
        }
        this.setState((prevState)=>({
            stars:prevState.stars-0.5
        }))
    }
    toggleFavourite=()=>{
        this.setState({
            favourite:!this.state.favourite
        })
    }
    toggleCartBtn(){
        this.setState({
            isInCart:!this.state.isInCart
        })

    }
    render(){
        let {movies,cartCounter,toggleFavourite}=this.props;
        const {title,plot,price,rating,star,fav,isInCart}=movies;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src="https://w0.peakpx.com/wallpaper/551/479/HD-wallpaper-avengers-poster-avengers-poster-marvels-super-hero-superhero-the-avengers.jpg" />
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs {price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img src="https://cdn-icons-png.flaticon.com/128/2732/2732689.png" className="str-btn" onClick={()=>this.props.decreaseStars(this.props.movies)} alt="increase" />
                                <img className="stars" src="https://cdn-icons-png.flaticon.com/128/616/616489.png" alt="stars" />
                                <img src="https://cdn-icons-png.flaticon.com/128/149/149705.png" className="str-btn" onClick={()=>this.props.addStars(this.props.movies)} alt="increase" />
                                <span>{star}</span>
                            </div>
                            
                            <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={()=>toggleFavourite(movies)}>{fav?"Unfavourite":"favourite"}</button>
                            <button className={isInCart?"remove-cart-btn":"cart-btn"} onClick={()=>cartCounter(movies)}>{isInCart?"Remove From Cart":"Add to Cart"}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;