import React from 'react';
import PropTypes from 'prop-types';
import Result from './Result';

class SearchPage extends React.Component {
  constructor (props) {
    super(props);
    this.searchChange = this.searchChange.bind(this);
  }

  searchChange(e) {
    this.props.doQuery(e.target.value);
  }

  render() {
    const {results, message} = this.props;

    return (
      <div className="search">
        <div className="searchBox">
          <input
            placeholder="Search for a movie"
            onChange={this.searchChange}
            value={this.props.query}
          />
        </div>

        <div className="results">
          {results.length === 0 && <p className="message">{message}</p>}

          {results.map(data => (
            <Result
              result={data}
              imgUrl={this.props.imgUrl}
              key={data.id}
              addFav={this.props.addFav}
              favouriteIds={this.props.favouriteIds}
            />
          ))}
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = {
  results: PropTypes.array.isRequired,
  query: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  doQuery: PropTypes.func.isRequired,
  addFav: PropTypes.func.isRequired,
  favouriteIds: PropTypes.object.isRequired,
};


export default SearchPage;
