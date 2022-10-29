import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import './Buscador.css';
import {getMovies,addMovieFavorite} from '../../actions/';

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }

  render() {
    const {title}= this.state
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit" > BUSCAR </button>
        </form>
        <ul>
         {this.props.movies?.map( u =>
         <div key={u.imdbID} className='hola'>
           <NavLink to={`/movie/${u.imdbID}`} className='inactive' activeClassName="hola">
            <li> {u.Title} </li>
            </NavLink>
            <button className="los" 
            onClick={() => this.props.addMovieFavorite({Title: u.Title, id: u.imdbID})} 
            >FAV
            </button>
            </div>
         )} 
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);

