import React, { Component } from "react";
 import { connect } from "react-redux";
 import {Link} from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from "../../actions";

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
        {this.props.movies?.map(u =>
         <div key={u.id}>
            <li><Link to='/movie/:id'>{u.Title}</Link> </li>
            <button className="los" 
            onClick={() => this.props.removeMovieFavorite(u.id)} 
            >X
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
    movies: state. moviesFavorites
  }
}

export default connect(mapStateToProps,{removeMovieFavorite})(ConnectedList);
