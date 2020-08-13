import React from 'react';
import Head from "next/head";
import {Provider} from "react-redux";
import store from "@store/index";
import '@styles/main.scss';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
      </Head>
      <Provider store={store}>
        <Component {...pageProps}/>
        <div id="modal-root"/>
      </Provider>
    </>
  );
}

export default App;
