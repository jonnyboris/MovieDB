import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const FavouritesContainer = (props) => {
  const {favourites} = props;

  return(
    <div className="favourites">
      <h4>Your Favourites</h4>
      <ol>
        {favourites.map(favourite => (
          <li key={favourite.id}><Link to={`/movie/${favourite.id}`} className="favourite">{favourite.title}</Link></li>
        ))}
      </ol>

      {!favourites.length && <p className="muted">No favourites added</p>}
    </div>
  );
};

FavouritesContainer.propTypes = {
  favourites: PropTypes.array.isRequired,
};

export default FavouritesContainer;
