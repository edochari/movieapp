import {Component} from "react";
import "../index.css";
class MovieCard extends Component{
    render(){
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src="https://w0.peakpx.com/wallpaper/551/479/HD-wallpaper-avengers-poster-avengers-poster-marvels-super-hero-superhero-the-avengers.jpg" />
                    </div>
                    <div className="right">
                        <div className="title">The Avengers</div>
                        <div className="plot">All have super powers</div>
                        <div className="price">Rs 199</div>
                        <div className="footer">
                            <div className="rating">12</div>
                            <div className="star-dis">
                                <img src="https://cdn-icons-png.flaticon.com/128/2732/2732689.png" alt="increase" />
                                <img className="stars" src="https://cdn-icons-png.flaticon.com/128/616/616489.png" alt="stars" />
                                <img src="https://cdn-icons-png.flaticon.com/128/149/149705.png" alt="increase" />
                            </div>
                            <button className="favourite-btn">favourites</button>
                            <button className="cart-btn">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;