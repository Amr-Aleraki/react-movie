import React from 'react';
import { Link } from "react-router-dom";
import "./MovieThumb.css";

const MovieThump = (props) => {
    return (
        <div className="rmdb-moviethumb">
            {props.clickable ? 
            <Link to={{ pathname: `/${props.movieId}`, movieName: `${props.movieName}`}}>
            <img src={props.image} alt="moviethump"/>
            </Link>
            :
            <img src={props.image} alt="moviethump"/>
            }
        </div>
    )
}

export default MovieThump
