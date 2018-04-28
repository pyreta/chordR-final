import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import App from './ApiUi';
import actions from '../actions';

class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <App />
        </div>
      </Provider>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  click: () => dispatch(actions.CHANGE_KEY('NOO TONIC')),
});

export default connect(() => ({}), mapDispatchToProps)(Root);
