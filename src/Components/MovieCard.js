import {Component} from "react";
import "../index.css";
class MovieCard extends Component{
    constructor()
    {
        super();
        this.state={
            title:"The Avengers",
            plot:"All have super powers",
            price:"199",
            rating:"8.5",
            stars:0,
            favourite:false,
            isInCart:false,
        }
    }

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
        const {title,plot,price,rating,stars,favourite,isInCart}=this.state;
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
                                <img src="https://cdn-icons-png.flaticon.com/128/2732/2732689.png" className="str-btn" onClick={this.decreaseStars} alt="increase" />
                                <img className="stars" src="https://cdn-icons-png.flaticon.com/128/616/616489.png" alt="stars" />
                                <img src="https://cdn-icons-png.flaticon.com/128/149/149705.png" className="str-btn" onClick={this.addStars.bind(this)} alt="increase" />
                                <span>{stars}</span>
                            </div>
                            
                            <button className={favourite?"unfavourite-btn":"favourite-btn"} onClick={this.toggleFavourite}>{favourite?"Unfavourite":"favourite"}</button>
                            <button className={isInCart?"remove-cart-btn":"cart-btn"} onClick={this.toggleCartBtn.bind(this)}>{isInCart?"Remove":"Add to Cart"}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;