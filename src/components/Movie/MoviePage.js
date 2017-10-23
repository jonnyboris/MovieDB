import React from 'react';
import PropTypes from 'prop-types';
import MovieDetails from './MovieDetails';
import CastMember from './CastMember';

class Movie extends React.Component {

  constructor(props) {
    super(props);
    this.addFav = this.addFav.bind(this);
  }

  addFav() {
    const {details} = this.props.movie;
    this.props.addFav(details.id, details.title);
  }

  render() {
    const {movie} = this.props;
    const {details} = this.props.movie;

    return(
      <div className="movie">
        {movie.loading && <p className="movieMessage">{movie.message}</p>}

        {!movie.loading &&
        <div>
          <div className="row">
            <div className="column">
              <img className="moviePoster" src={`${this.props.baseUrl}${details.poster_path}`}/>
            </div>

            <div className="column">
              <MovieDetails
                baseUrl={this.props.baseUrl}
                movie={movie}
                addFav={this.addFav}
                favouriteIds={this.props.favouriteIds}
              />
            </div>
          </div>

          <div>
            <div>
              <h2>Cast</h2>
              <table className="castTable">
                <tbody>
                {movie.cast.cast.map((member, i) => (<CastMember member={member} castUrl={this.props.castUrl} key={i} />))}
                </tbody>
              </table>

            </div>
          </div>

        </div>
        }

      </div>
    );
  }
}

Movie.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  castUrl: PropTypes.string.isRequired,
  movie: PropTypes.object.isRequired,
  favouriteIds: PropTypes.object.isRequired,
  addFav: PropTypes.func.isRequired,
};

export default Movie;
