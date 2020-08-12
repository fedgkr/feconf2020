import React from 'react';
import '@styles/main.scss';
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
      </Head>
      <Component {...pageProps}/>
    </>
  );
}

export default App;
