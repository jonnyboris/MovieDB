import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ResultImage from './ResultImage';
import FavouritesStar from '../FavouritesStar';
import {Link} from 'react-router-dom';

class Result extends React.Component {

  constructor(props) {
    super(props);
    this.addFav = this.addFav.bind(this);
  }

  addFav() {
    const {result} = this.props;
    this.props.addFav(result.id, result.title);
  }

  render() {

    const {result, imgUrl} = this.props;
    return (
      <div className="result">

        <div className="resultImage">
          {result.poster_path && <ResultImage baseUrl={imgUrl} path={result.poster_path} title={result.title}/>}
        </div>
        <div className="resultText">
          <div className="titleRow">
            <Link to={`/movie/${result.id}`} className="resultTitle"><h3>{result.title}</h3></Link>
            <FavouritesStar favouriteIds={this.props.favouriteIds} id={result.id} addFav={this.addFav}/>
          </div>


          <p className="muted">{moment(result.release_date, "YYYY-MM-DD").format("DD/MM/YYYY")}</p>
          <p>{result.overview}</p>
        </div>
      </div>
    );
  }

}

Result.propTypes = {
  result: PropTypes.object.isRequired,
  imgUrl: PropTypes.string.isRequired,
  addFav: PropTypes.func.isRequired,
  favouriteIds: PropTypes.object.isRequired,
};

export default Result;
