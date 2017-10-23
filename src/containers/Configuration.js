import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/configActions';
import ConfigLoading from '../components/ConfigLoading';

class ConfigContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(!this.props.config.configured) {
      this.props.actions.getConfig();
    }
  }

  render() {
    return (
      <div>
        {this.props.config.configured ? this.props.children : <ConfigLoading message={this.props.config.message}/>}
      </div>
    );
  }
}

ConfigContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};

function mapStateToProps(state) {
  return {
    config: state.config
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfigContainer);
