import React from 'react';
import PropTypes from 'prop-types';

const FavouritesStar = (props) => {
  const {favouriteIds, id} = props;
  return(
    <span>
    {(favouriteIds[id]) ?
      <i className="fa fa-star favStar favourited" aria-hidden="true"/>
      :
      <i className="fa fa-star-o favStar " aria-hidden="true" onClick={props.addFav}/>
    }
    </span>
  );
};

FavouritesStar.propTypes = {
  favouriteIds: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  addFav: PropTypes.func.isRequired,

};

export default FavouritesStar;
