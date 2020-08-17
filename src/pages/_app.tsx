import React from 'react';
import Head from "next/head";
import {Provider} from "react-redux";
import store from "@store/index";
import '@styles/main.scss';

function App({Component, pageProps}) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <title>FEConf2020</title>
        <meta
          name="description"
          content="2020 FEConf Korea 행사를 응원해주세요. 올해 네번째 열리는 FEConf! 많은 관심과 성원 부탁드립니다."
        />
        <meta
          name="keywords"
          content="프론트엔드,프론트엔드개발자,프론트엔드개발자그룹,개발자,프로그래머,마크업,디자이너,컨퍼런스,이벤트,서울,FrontEnd,Developer,Programmer,Markup,Designer,Conference,Event,Seoul"
        />
        <meta property="og:url" content="https://2020.feconf.kr/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="2020 FEConf Korea" />
        <meta
          property="og:description"
          content="2020 FEConf Korea 행사를 응원해주세요. 올해 네번째 열리는 FEConf! 많은 관심과 성원 부탁드립니다."
        />
        <meta property="og:image" content="https://fedgkr.github.io/feconf2020/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2020 FEConf Korea" />
        <meta
          name="twitter:description"
          content="2020 FEConf Korea 행사를 응원해주세요. 올해 네번째 열리는 FEConf! 많은 관심과 성원 부탁드립니다."
        />
        <meta name="twitter:creator" content="@codemilli" />
        <meta name="twitter:image" content="https://fedgkr.github.io/feconf2020/images/og-image.jpg" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/manifest.json"/>
      </Head>
      <Provider store={store}>
        <Component {...pageProps}/>
        <div id="modal-root"/>
      </Provider>
    </>
  );
}

export default App;
