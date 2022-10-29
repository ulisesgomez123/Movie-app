import React from 'react';
import { connect} from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

componentDidMount() {
    this.props.getMovieDetail(this.props.match.params.id)

}

    render() {
        return (
            <div className="movie-detail">
                Detalle de la pelicula  
            </div>
            
        );
    }
}

const MapStateToProps = (state) =>{
 return {
    movie: state.movieDetail
 }
}
    


export default connect(MapStateToProps,{getMovieDetail})(Movie);