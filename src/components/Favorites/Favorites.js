import React, { Component } from "react";
 import { connect } from "react-redux";
 import {NavLink} from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from "../../actions";

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h1 className="favorites">Favorite movies</h1>
        <ul>
        {this.props.movies?.map(u =>
         <div key={u.id} className='hola'>
             <NavLink to={`/movie/${u.imdbID}`} >
            <div className="divsito"> <div className="p">{`  ${u.Title} `} </div> </div>
            </NavLink>
            <button className="botoncito" 
            onClick={() => this.props.removeMovieFavorite(u.id)} 
            >Remove
            </button>
            </div>
         )} 
        </ul>
      </div>
    );
  }
}

const mapStateToProps= (state) => {
  return {
    movies: state.moviesFavorites
  }
}

export default connect(mapStateToProps,{removeMovieFavorite})(ConnectedList);
