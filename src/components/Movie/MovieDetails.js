import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import FavouritesStar from '../FavouritesStar';

const MovieDetails = (props) => {

  const {movie} = props;
  const {details} = props.movie;
  let genres;
  let director = "Unknown";

  if(!movie.loading && details.genres) {
    genres = details.genres.map(genre => genre.name).join(', ');
  }

  if(movie.cast.director && movie.cast.director.name)  {
    director = movie.cast.director.name;
  }

  return(
    <div>
      <div className="titleRow">
        <h1>{details.title}</h1>
        <FavouritesStar favouriteIds={props.favouriteIds} id={details.id} addFav={props.addFav}/>
      </div>
      {details.tagline && <h2>{details.tagline}</h2>}
      <p className="muted">{moment(details.release_date, "YYYY-MM-DD").format("DD/MM/YYYY")}</p>
      <p>{genres}</p>

      <div className="overview">
        <p><strong>User Rating</strong> - {details.vote_average * 10}%</p>
        <p><strong>Overview</strong> - {details.overview}</p>
        <p><strong>Director</strong> - {director}</p>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  movie: PropTypes.object.isRequired,
  favouriteIds: PropTypes.object.isRequired,
  addFav: PropTypes.func.isRequired,
};

export default MovieDetails;
