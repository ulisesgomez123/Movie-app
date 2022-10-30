import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import './Buscador.css';
import {getMovies,addMovieFavorite} from '../../actions/';
import { Popover } from "bootstrap";

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
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <div className="div">Search your movie here  </div>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
              placeholder='   title...'
            />
                <button type="submit" className="btn">  Search  </button>
           
          </div>
    
        </form>
        <ul>
         {this.props.movies?.map( u =>
         <div key={u.imdbID} className='hola'>
           <NavLink to={`/movie/${u.imdbID}`} className='inactive' activeClassName="hola">
            <div className="divsito"> <div className="p">{`  ${u.Title} `} </div> </div>
            </NavLink>
            
            <button className="los" 
            onClick={() => 
              this.props.addMovieFavorite({Title: u.Title, id: u.imdbID})
            } 
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

