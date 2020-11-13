import App from 'next/app';
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import withReduxStore from '../static/lib/with-redux-store';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Fragment>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Fragment>
    );
  }
}

export default withReduxStore(MyApp);
