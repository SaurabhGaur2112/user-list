import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store/index';

const page = Page => (
  class PageWrapper extends Component {
    render() {
      return (
        <Provider store={store}>
          <Page />
        </Provider>
      );
    }
  }
);

export default page;
