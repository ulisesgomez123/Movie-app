import React from 'react';
import { connect} from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import css from './Movie.module.css';

class Movie extends React.Component {
    
componentDidMount() {
    this.props.getMovieDetail(this.props.match.params.id)
}

    render() {
        return (
            <div >
            <p> Movie details</p>
            <div id={css.uno}>
            <div className={css.corazon}><p className={css.p}>Poster:</p><img className={css.img} src={this.props.movie.Poster} alt='Poster of the movie'/></div>
            <div className={css.ll}><p className={css.p}>Movie:</p> <h1 className={css.hh}>{this.props.movie.Title}</h1> </div>
            <div className={css.ll}><p className={css.p}>Year:</p> <h1 className={css.hh}>{this.props.movie.Year}</h1></div>
            <div className={css.ll}><p className={css.p}>Director:</p> <h1 className={css.hh}>{this.props.movie.Director}</h1></div>
            <div className={css.ll}><p className={css.p}>Genre:</p> <h1 className={css.hh}>{this.props.movie.Genre}</h1></div>
            <div className={css.corazon}><p className={css.p}>Actors:</p> <h1 className={css.hh}>{this.props.movie.Actors}</h1></div>
            <div className={css.corazon}><p className={css.p}>Plot:</p> <h1 className={css.hh}>{this.props.movie.Plot}</h1></div>
            
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
 return {
    movie: state.movieDetail
 }
}
    


export default connect(mapStateToProps,{getMovieDetail})(Movie);